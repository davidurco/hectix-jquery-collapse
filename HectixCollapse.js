(function($) {
    $.fn.HectixCollapse = function(options) {

        var settings = $.extend({
            visible_producers: 1,
            animation_speed: 400,
            items_per_click: 1,
            show_counter: false,
            button_text: "Next"
        }, options);


        var $myClass = $(this).find('.producer');
        var $obj = $(this);

        var items = function($duration, $test, $type) {
            $test.each(function(index) {
                if ($type == 'myClass') {
                    if (index > settings.visible_producers - 1) {
                        $(this).slideToggle($duration);
                    }
                }
                if ($type == 'myHidden') {
                    if (index < settings.items_per_click) {
                        $(this).slideToggle($duration);
                    }
                }
            });
        };

        items(0, $myClass, 'myClass');

        var $myHidden = $obj.find('.producer').filter(":hidden");
        if (settings.show_counter === true) {
            $(".left-to-show").html($myHidden.length);
        }

        $(".button-text").html(settings.button_text);

        $(this).find('a[role="button"]').on("click", function() {
            var $myHidden = $obj.find('.producer').filter(":hidden");
            if (settings.show_counter === true) {
                if ($myHidden.length === 0) {
                    $(".left-to-show").html($myHidden.length);
                } else {
                    $(".left-to-show").html($myHidden.length - 1);
                }
            }
            items(settings.animation_speed, $myHidden, 'myHidden');
        });
        return this;
    };
})(jQuery);
