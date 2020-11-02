namespace RemoteController.Controls
{
    public class ResourceKeys
    {
        public static class Brushes
        {
            public static string Background { get; } = "StyledWindow.Brushes.Background";
            public static string Highlight { get; } = "StyledWindow.Brushes.Highlight";

            /// <summary>
            /// Brush used for highlight active elements (window itself, action buttons)
            /// </summary>
            public static string Active { get; } = "StyledWindow.Brushes.Active";
            public static string Foreground { get; } = "StyledWindow.Brushes.Foreground";
        }

        public static class Colors
        {
            public static string Background { get; } = "StyledWindow.Colors.Background";
            public static string Highlight { get; } = "StyledWindow.Colors.Highlight";
            public static string Active { get; } = "StyledWindow.Colors.Active";
            public static string Foreground { get; } = "StyledWindow.Colors.Foreground";
        }

        /// <summary>
        /// Brush used for title bar.
        /// </summary>
        public static string TitleBackgroundKey { get; } = "WindowStyle.TitleBackground";
    }
}