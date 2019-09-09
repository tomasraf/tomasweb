$(document).ready(function () {
    // Load initial page
    $.get( '/about.html', function( data ) {
        $( '#jid_content' ).html( data );
    });


    $( '.navbar a' ).click(function () {
        let self = $(this);
        let isActive = self.hasClass('active');
        if ( !isActive ) {
            $( '.navbar a' ).removeClass('active');
            self.addClass('active');

            if (self.attr('href') === '#apie') {
                $.get( '/about.html', function( data ) {
                    $( '#jid_content' ).html( data );
                });

                //return;
            }
            if (self.attr('href') === '#kontaktai') {
                $.get( '/calculator.html', function( data ) {
                    $( '#jid_content' ).html( data );
                });

                return;
            }
            if (self.attr('href') === '#portfolio') {

                return;
            }

        }

    });
});