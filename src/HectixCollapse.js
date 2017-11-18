(function($) {
    $.fn.hectixCollapse = function(options) {

        // default values for all settings
        var settings = $.extend({
            initialItems: 1,
            itemsPerClick: 1,
            slideSpeed: 400,
            showCounter: false,
            buttonText: "Next"
        }, options);

        var $obj = $(this);
        var collapse_item = $obj.find('.collapse-item');

        var items = function($duration, $collapse_item, $type) {
            $collapse_item.each(function(index) {
                if ($type === 'initial') {
                    if (index > settings.initialItems - 1) {
                        $(this).slideToggle($duration);
                    }
                }
                if ($type === 'progress') {
                    if (index < settings.itemsPerClick) {
                        $(this).slideToggle($duration);
                    }
                }
            });
        };

        items(0, collapse_item, 'initial');
        $obj.removeClass("cs-hidden");
        var hiddenItem = $obj.find('.collapse-item').filter(":hidden");

        if (settings.showCounter === true) {
            $obj.find(".counter").html(hiddenItem.length);
        }
        $obj.find(".button-text").html(settings.buttonText);

        $obj.find('a.collapse-button').on("click", function() {
            var hiddenItem = $obj.find('.collapse-item').filter(":hidden");
            if (settings.showCounter === true) {
                if (hiddenItem.length === 0) {
                    $obj.find(".counter").html(hiddenItem.length);
                } else {
                    $obj.find(".counter").html(hiddenItem.length - 1);
                }
            }
            items(settings.slideSpeed, hiddenItem, 'progress');
        });
        return this;
    };
})(jQuery);