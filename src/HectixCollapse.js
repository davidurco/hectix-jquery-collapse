(function($) {
    $.fn.HectixCollapse = function(options) {

        var settings = $.extend({
            initialItems: 1,
            slideSpeed: 400,
            itemsPerClick: 1,
            showCounter: false,
            buttonText: "Next"
        }, options);

        var collapse_item = $(this).find('.collapse-item');
        var $obj = $(this);

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
        $(this).removeClass("cs-hidden");
        var hiddenItem = $obj.find('.collapse-item').filter(":hidden");
        if (settings.showCounter === true) {
            $(this).find(".counter").html(hiddenItem.length);
        }

        $(this).find(".button-text").html(settings.buttonText);

        $(this).find('a.collapse-button').on("click", function() {
            var hiddenItem = $obj.find('.collapse-item').filter(":hidden");
            if (settings.showCounter === true) {
                if (hiddenItem.length === 0) {
                    $(this).find(".counter").html(hiddenItem.length);
                } else {
                    $(this).find(".counter").html(hiddenItem.length - 1);
                }
            }
            items(settings.slideSpeed, hiddenItem, 'progress');
        });
        return this;
    };
})(jQuery);