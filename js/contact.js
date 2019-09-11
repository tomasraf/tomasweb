$(document).ready(function () {
    $('#jid_main_content').on( "mainContentChanged", function( event, param1 ) {
        if (param1 == 'contact') {
            $('.contact_container button[value=Submit]').click(function (e) {
                e.preventDefault();
                let sendData = getData();
                let jsonData = convertToJson(sendData);

                console.log(jsonData);
                sendContactData(jsonData);

            });
        }
    });

});

function getData() {
    let sendData = {};
    sendData.fullName = $('#fname').val();
    sendData.email = $('#email').val();
    sendData.themeName = $('#mtheme').val();
    sendData.message = $('#message').val();

    return sendData;
}

function convertToJson(data) {
    return {
        "fullName": data.fullName,
        "email": data.email,
        "theme": data.themeName,
        "message": data.message
    };
}

function sendContactData(json) {
    $.post('/php/contactData.php', json, function(data, status) {
        $('.contact_container .jid_res').html(data);
    });
}