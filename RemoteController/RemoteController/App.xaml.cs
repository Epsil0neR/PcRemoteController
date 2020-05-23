namespace RemoteController
{
    public partial class App
    {

        public App()
        {
            IoC.RegisterInstance(Log.Logger);
            DomainExceptionHandler.HandleDomainExceptions();
        }

    }
}
