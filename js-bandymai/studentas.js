document.addEventListener('DOMContentLoaded', function() {

    let firstName = "Tomas";
    let lastName = "Raf";
    let hightScool = "KK";
    let course = 4;
    let notes = [10, 10, 9];

    let studentTextLine =
        firstName + " " + lastName + ", mokosi " +
        hightScool + ", " +
        course + " kurse, jo pažymiai: " +
        notes.toString() + "<br/>";

    let variableList =
        'firstName yra ' + typeof firstName + ';<br/>' +
        'lastName yra ' + typeof lastName + ';<br/>' +
        'hightScool yra ' + typeof hightScool + ';<br/>' +
        'cource yra ' + typeof course + ';<br/>' +
        'notes yra ' + typeof notes + ';<br/>';

    let student = {
        firstName: firstName,
        lastName: lastName,
        hightScool: hightScool,
        course: course,
        notes: notes
    }

    let studentInfoTextLine = // result will be the same as studentTextLine.
        student.firstName + " " + student.lastName + ", mokosi " +
        student.hightScool + ", " +
        student.course + " kurse, jo pažymiai: " +
        student.notes.toString() + "<br/>";

    let propertyList = ""; // result will be the same as variable list.
    for (let propertyName in student) {
        let propertyType = student[propertyName] + " yra " + typeof student[propertyName] + "<br/>";
        propertyList += propertyType;
    }

    document.write('<br/>3. <br/>');
    document.write(studentTextLine);
    document.write('<br/>4. <br/>');
    document.write(variableList);

    document.write('<br/>6. Check Your Student object in Console...<br/>');
    console.log(student); // 6

    document.write('<br/>7. <br/>');
    document.write(studentInfoTextLine);
    document.write('<br/>8. <br/>');
    document.write('student notes: ' + student.notes + ";");

    for (let ni = 0; ni < student.notes.length; ni++)
        if (student.notes[ni] < 10)
            student.notes[ni]++;

    document.write('<br/>9. <br/>');
    document.write('student notes: ' + student.notes + ";");

    let sum = 0;
    for (let ni = 0; ni < student.notes.length && ni < 3; ni++)
        sum += student.notes[ni];

    document.write('<br/>10. <br/>');
    document.write('Sum of 3 notes: ' + sum + ";");

    let multiply = 1;
    for (let ni = 0; ni < student.notes.length && ni < 2; ni++)
        multiply *= student.notes[ni];

    document.write('<br/>11. <br/>');
    document.write('Multiply of first 2 notes: ' + multiply + ";");

    document.write('<br/>12. <br/>');
    document.write('Object property course ' + (typeof student.course == 'numeral' ? 'is numeral type;' :  'is not numeral type;'));

    document.write('<br/>13. <br/>');
    document.write('Student is studying in course ' +
        (student.course === 4
            ? student.course + 'and course is numeral type;'
            : "is not numeral type or student is not studying in course " + student.course + ';'));

    document.write('<br/>14. <br/>');
    let message = 'Studentui dar toli iki mokslų baigimo;';
    if (student.course == 4)
        message = 'Studentas yra abiturientas;';
    document.write(message);

}, false);



