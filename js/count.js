(function($) {
    'use strict';

    var a = 0;
    $(window).on('scroll', function() {
        var $counter = $('#counter');
        if ($counter.length) {
            var oTop = $counter.offset().top - window.innerHeight;
            if (a === 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({ countNum: $this.text() }).animate(
                        {
                            countNum: countTo
                        },
                        {
                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                            }
                        }
                    );
                });
                a = 1;
            }
        }
    });
})(jQuery);
