$(document).ready(function () {
    // Load initial page
    $.get( '/calculator.html', function( data ) {
        let mainContent = $( '#jid_main_content' );
        mainContent.html( data );
        let navbar = $( '.navbar a' );
        navbar.removeClass('active');
        $(".navbar a[href*='kontaktai']").addClass('active');
        //mainContent.addClass('jid_apie');
        mainContent.trigger( "mainContentChanged", [ "kontaktai" ] );
    });


    $( '.navbar a' ).click(function () {
        let self = $(this);
        let mainContent = $( '#jid_main_content' );
        let isActive = self.hasClass('active');
        if ( !isActive ) {
            $( '.navbar a' ).removeClass('active');
            self.addClass('active');

            if (self.attr('href') === '#apie') {
                $.get( '/about.html', function( data ) {
                    mainContent.html( data );
                    //mainContent.removeClass('jid_kontaktai', 'jid_portfolio');
                    //mainContent.addClass('jid_apie');
                    mainContent.trigger( "mainContentChanged", [ "apie" ] );
                });

                //return;
            }
            if (self.attr('href') === '#kontaktai') {
                $.get( '/calculator.html', function( data ) {
                    mainContent.html( data );
                    //mainContent.removeClass('jid_apie', 'jid_portfolio');
                    //mainContent.addClass('jid_kontaktai');
                    mainContent.trigger( "mainContentChanged", [ "kontaktai" ] );
                });

                return;
            }
            if (self.attr('href') === '#portfolio') {
                //mainContent.removeClass('jid_portfolio');
                //mainContent.addClass('jid_portfolio');
                mainContent.trigger( "mainContentChanged", [ "portfolio" ] );

                return;
            }



        }

    });
});