using System;
using System.IO;
using System.Security.Cryptography.X509Certificates;
using System.Threading;
using System.Threading.Tasks;
using Org.BouncyCastle.Asn1.X509;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Generators;
using Org.BouncyCastle.Crypto.Operators;
using Org.BouncyCastle.Math;
using Org.BouncyCastle.Pkcs;
using Org.BouncyCastle.Security;
using Org.BouncyCastle.Utilities;
using Org.BouncyCastle.X509;

namespace RemoteController.Utils;

// https://gist.github.com/svrooij/ec6f664cd93cd09e84414112d23f6a42
internal static class CertUtils
{
    public static X509Certificate2 Generate(string subject, out string password)
    {

        var random = new SecureRandom();
        var certificateGenerator = new X509V3CertificateGenerator();

        var serialNumber = BigIntegers.CreateRandomInRange(BigInteger.One, BigInteger.ValueOf(Int64.MaxValue), random);
        certificateGenerator.SetSerialNumber(serialNumber);

        certificateGenerator.SetIssuerDN(new X509Name($"C=NL, O=Epsiloner, CN={subject}"));
        certificateGenerator.SetSubjectDN(new X509Name($"C=NL, O=Epsiloner, CN={subject}"));
        certificateGenerator.SetNotBefore(DateTime.UtcNow.Date);
        certificateGenerator.SetNotAfter(DateTime.UtcNow.Date.AddYears(1));

        const int strength = 2048;
        var keyGenerationParameters = new KeyGenerationParameters(random, strength);
        var keyPairGenerator = new RsaKeyPairGenerator();
        keyPairGenerator.Init(keyGenerationParameters);

        var subjectKeyPair = keyPairGenerator.GenerateKeyPair();
        certificateGenerator.SetPublicKey(subjectKeyPair.Public);

        var issuerKeyPair = subjectKeyPair;
        const string signatureAlgorithm = "SHA256WithRSA";
        var signatureFactory = new Asn1SignatureFactory(signatureAlgorithm, issuerKeyPair.Private);
        var bouncyCert = certificateGenerator.Generate(signatureFactory);

        // Lets convert it to X509Certificate2
        X509Certificate2 certificate;

        Pkcs12Store store = new Pkcs12StoreBuilder().Build();
        store.SetKeyEntry($"{subject}_key", new AsymmetricKeyEntry(subjectKeyPair.Private), new[] { new X509CertificateEntry(bouncyCert) });
        password = Guid.NewGuid().ToString("x");

        using (var ms = new System.IO.MemoryStream())
        {
            store.Save(ms, password.ToCharArray(), random);
            certificate = new X509Certificate2(ms.ToArray(), password, X509KeyStorageFlags.Exportable);
        }

        //Console.WriteLine($"Generated cert with thumbprint {certificate.Thumbprint}");
        return certificate;
    }

    public static async Task ExportAsPfxAsync(X509Certificate2 certificate, string password, string path, CancellationToken token = default)
    {
        var data = certificate.Export(X509ContentType.Pfx, password);
        await File.WriteAllBytesAsync(path, data, token);
    }
}