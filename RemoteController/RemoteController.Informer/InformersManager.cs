﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace RemoteController.Informer
{
    public class InformersManager
    {
        private readonly List<BaseInformer> _items = new List<BaseInformer>();

        public event EventHandler<BaseInformer> InformerChanged;

        public bool Started { get; private set; }

        public IEnumerable<BaseInformer> Informers => _items.ToList();

        public void Register(BaseInformer informer)
        {
            if (informer == null)
                throw new ArgumentNullException(nameof(informer));
            if (_items.Any(x => string.Equals(x.Name, informer.Name, StringComparison.InvariantCultureIgnoreCase)))
                throw new ArgumentException("Informer with same name already registered.", nameof(informer));

            _items.Add(informer);
            informer.Changed += InformerOnChanged;
            if (Started)
                Start(informer);
            else
                Stop(informer);
        }

        public void CheckForChanges(string name)
        {
            var informers = _items.ToList();
            if (!string.IsNullOrWhiteSpace(name))
                informers = informers
                    .Where(x => string.Equals(x.Name, name, StringComparison.InvariantCultureIgnoreCase))
                    .ToList();

            foreach (var informer in informers)
                informer.CheckForChanges();
        }

        public void Unregister(BaseInformer informer)
        {
            if (!_items.Remove(informer))
                return;

            Stop(informer);
            informer.Changed -= InformerOnChanged;
        }
        private void InformerOnChanged(object sender, EventArgs e)
        {
            InformerChanged?.Invoke(this, (BaseInformer)sender);
        }

        public void Start()
        {
            Started = true;
            foreach (var item in _items)
                Start(item);
        }

        public void Stop()
        {
            Started = false;
            foreach (var item in _items)
                Stop(item);
        }

        private void Start(BaseInformer informer)
        {
            informer.Start();
        }

        private void Stop(BaseInformer informer)
        {
            informer.Stop();
        }


    }
}