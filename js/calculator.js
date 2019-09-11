$(document).ready(function () {
    $('#jid_main_content').on( "mainContentChanged", function( event, param1 ) {
        if (param1 == 'kontaktai') {
            $('input[value*=Dauginti]').click(function () {
                let a = parseFloat($('#fval').val());
                let b = parseFloat($('#sval').val());
                console.log(a, b);

                let result = dauginti(a, b);
                $('.jid_res > span').html(isNaN(result) ? 'Check values\' formats': result);
            });

            $('input[value*=Dalinti]').click(function () {
                let a = parseFloat($('#fval').val());
                let b = parseFloat($('#sval').val());
                console.log(a, b);

                let result = dalinti(a, b);
                $('.jid_res > span').html(isNaN(result) ? 'Check values\' formats': result);
            });

            $('input[value*=Sudeti]').click(function () {
                let a = parseFloat($('#fval').val());
                let b = parseFloat($('#sval').val());
                console.log(a, b);

                let result = sudeti(a, b);
                $('.jid_res > span').html(isNaN(result) ? 'Check values\' formats': result);
            });

            $('input[value*=Atimti]').click(function () {
                let a = parseFloat($('#fval').val());
                let b = parseFloat($('#sval').val());
                console.log(a, b);

                let result = atimti(a, b);
                $('.jid_res > span').html(isNaN(result) ? 'Check values\' formats': result);
            });
        }
    });

});

function sudeti(a, b) {
    return a + b;
}

function atimti(a, b) {
    return a - b;
}

function dauginti(a, b) {
    return a * b;
}

function dalinti(a, b) {
    return a / b;
}