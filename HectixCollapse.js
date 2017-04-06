   (function($) {
       $.fn.myCollapse = function(options) {

           var settings = $.extend({ //
               visibleProducers: 1,   //
               animationSpeed: 400,  // Settings
               itemsPerClick: 1   //
           }, options);


           var $myClass = $(this).find('.yourElements'); // find all your collapse elements
           var $obj = $(this);

           var items = function($duration, $test, $type) {  // this function will collapse elements by their index.
               $test.each(function(index) {
                   if ($type == 'myClass') {
                       if (index > settings.visibleProducers - 1) {
                           $(this).slideToggle($duration);
                       }
                   }
                   if ($type == 'myHidden') {
                       if (index < settings.itemsPerClick) {
                           $(this).slideToggle($duration);
                       }
                   }
               });
           };

           items(0, $myClass, 'myClass'); // calling first function

           var $myHidden = $obj.find('.yourElements').filter(":hidden");  // find number of all hidden elements - before click
           $(".left-to-show").html($myHidden.length);                // show number of all hidden elements - before click

           $(this).find('.button').on("click", function() {  // function onclick
               items(settings.animationSpeed, $myHidden, 'myHidden'); // calling first function on click
               $myHidden = $obj.find('.yourElements').filter(":hidden");
               var length = $myHidden.length;
               if (length === 0) {     // if index is equal to 0, write something (this text will be displayed in button)
                 $('.button').text('All displayed');
               } else { // else, show how many elements are left to display.
                 $(".left-to-show").html(length);
               }
           });
           return this;
       };
   })(jQuery);