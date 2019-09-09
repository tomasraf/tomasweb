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

$('[value=Dauginti]').click(function () {
    let a = $('#fval').val();
    let b = $('#sval').val();
    console.log(a, b);

    let result = dauginti(a, b);
    $('#rez span').html(result);
});