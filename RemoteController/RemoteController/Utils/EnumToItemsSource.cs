using System;
using System.Linq;
using System.Windows.Markup;
using RemoteController.Extensions;

namespace RemoteController.Utils
{
    /// <summary>
    /// Converts any Enum to items source.
    /// Initial solution: https://stackoverflow.com/a/17405771/1763586
    /// </summary>
    /// <example>
    /// <  ComboBox
    ///     ItemsSource="{utils:EnumToItemsSource configs:ManipulationCommandType}"
    ///     DisplayMemberPath="DisplayName"
    ///     SelectedValuePath="Value"
    ///     SelectedValue="{Binding Type, Mode=TwoWay}" />
    /// </example>
    public class EnumToItemsSource : MarkupExtension
    {
        private readonly Type _type;

        public EnumToItemsSource(Type type)
        {
            _type = type;
        }

        public override object ProvideValue(IServiceProvider serviceProvider)
        {
            return Enum.GetValues(_type)
                .Cast<Enum>()
                .Select(e => new { Value = e, DisplayName = e.ToDescription() })
                .ToList();
        }
    }
}
