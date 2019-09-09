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
    let a = $('#vardas').value;
    let a = $('#zinute').text();
    console.log(a, b);

    let rezultatas = dauginti(a, b);
    $('#rez').appendChild($('<span>'));
    $('#rez > span').html(rezultatas);
});