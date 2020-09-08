
(function () {

    'use strict';

 
    //  Faqs Accordion
    var faqsAccordion = function () {

        var faqAcc = $('.faq-accordion h3');

        // Click
        faqAcc.on('click', function (event) {
            var $this = $(this);

            $('.faq-accordion').removeClass('active');
            $('.faq-accordion').find('.faq-body').slideUp(400, 'easeInOutExpo');

            if (!$this.closest('.faq-accordion').find('.faq-body').is(':visible')) {
                $this.closest('.faq-accordion').addClass('active');
                $this.closest('.faq-accordion').find('.faq-body').slideDown(400, 'easeInOutExpo');
            } else {
                $this.closest('.faq-accordion').removeClass('active');
                $this.closest('.faq-accordion').find('.faq-body').slideUp(400, 'easeInOutExpo');
            }


            // setTimeout(function () {
            //     $('html, body').animate({
            //         scrollTop: $this.closest('.faq-accordion.active').offset().top - 90
            //     }, 500);
            // }, 700);


            event.preventDefault();
            return false;

        });

    };

  




    // Document on load.
    $(function () {
        faqsAccordion();
    });


}());


