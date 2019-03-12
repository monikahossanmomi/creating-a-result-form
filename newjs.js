$('#firstname').keyup(function () {
    var firstNameValue = $('#firstname').val();
    $('#res1').text(firstNameValue);
});

$('#lastname').keyup(function () {
    var lastNameValue = $('#lastname').val();
    $('#res2').text(lastNameValue);
});

$('#laststname').blur(function () {
    var firstNameValue = $('#firstname').val();
    var lastNameValue = $('#lastname').val();
    $('#res3').text(firstNameValue+''+lastNameValue);
});