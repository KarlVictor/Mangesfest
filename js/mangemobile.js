    // Back to top function
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top-now').fadeIn();
            } else {
                $('#back-to-top-now').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top-now').click(function () {
            $('#back-to-top-now').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0

            }, 800);
            return false;
        });
        $('#back-to-top-now').tooltip('show');
    });