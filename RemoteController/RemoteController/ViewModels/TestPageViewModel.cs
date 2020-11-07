namespace RemoteController.ViewModels
{
    public class TestPageViewModel : BasePageViewModel
    {
        public TestPageViewModel()
            : base((uint)PagePriority.Test, "TEST")
        {
        }
    }
}