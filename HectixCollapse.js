(function($) {
    $.fn.HectixCollapse = function(options) {

        var settings = $.extend({
            initial_items: 1,
            slide_speed: 400,
            items_per_click: 1,
            show_counter: false,
            button_text: "Next"
        }, options);

        var collapse_item = $(this).find('.collapse-item');
        var $obj = $(this);

        var items = function($duration, $collapse_item, $type) {
            $collapse_item.each(function(index) {
                if ($type === 'initial') {
                    if (index > settings.initial_items - 1) {
                        $(this).slideToggle($duration);
                    }
                }
                if ($type === 'progress') {
                    if (index < settings.items_per_click) {
                        $(this).slideToggle($duration);
                    }
                }
            });
        };

        items(0, collapse_item, 'initial');

        var hidden_item = $obj.find('.collapse-item').filter(":hidden");
        if (settings.show_counter === true) {
            $(this).find(".counter").html(hidden_item.length);
        }

        $(this).find(".button-text").html(settings.button_text);

        $(this).find('a.collapse-button').on("click", function() {
            var hidden_item = $obj.find('.collapse-item').filter(":hidden");
            if (settings.show_counter === true) {
                if (hidden_item.length === 0) {
                    $(this).find(".counter").html(hidden_item.length);
                } else {
                    $(this).find(".counter").html(hidden_item.length - 1);
                }
            }
            items(settings.slide_speed, hidden_item, 'progress');
        });
        return this;
    };
})(jQuery);