let studentas = {
    vardas: 'Vardenis',
    pavarde: 'Pavardenis',
    kursas: 'IT-4',
    pazymiai: [7,8,9,7,8,9,7]
};

$('p').click(function() {
    $(this).html(studentasStringuose(studentas));
});

function studentasStringuose(s) {
    let txt = '';
    for (let i = 0; i < Object.keys(s).length; i++) {
        let key = Object.keys(s)[i];
        txt += s[key] + ' ';
    }

    return txt;
}

$('#jid_logo').click(function() {
    $(this).appendChild($('span').html(studentas.pazymiai));
});
