$(document).ready(function () {
    // Load initial page
    $.get( '/contact.html', function( data ) {
        let mainContent = $( '#jid_main_content' );
        mainContent.html( data );
        let navbar = $( '.navbar a' );
        navbar.removeClass('active');
        $(".navbar a[href*='contact']").addClass('active');
        mainContent.trigger( "mainContentChanged", [ "contact" ] );
    });


    $( '.navbar a' ).click(function () {
        let self = $(this);
        let mainContent = $( '#jid_main_content' );
        let isActive = self.hasClass('active');
        if ( !isActive ) {
            $( '.navbar a' ).removeClass('active');
            self.addClass('active');

            if (self.attr('href') === '#about') {
                $.get( '/about.html', function( data ) {
                    mainContent.html( data );
                    mainContent.trigger( "mainContentChanged", [ "about" ] );
                });

                return;
            }
            if (self.attr('href') === '#contact') {
                $.get( '/contact.html', function( data ) {
                    mainContent.html( data );
                    mainContent.trigger( "mainContentChanged", [ "contact" ] );
                });

                return;
            }
            if (self.attr('href') === '#portfolio') {
                mainContent.trigger( "mainContentChanged", [ "portfolio" ] );

                //return;
            }


        }

    });
});