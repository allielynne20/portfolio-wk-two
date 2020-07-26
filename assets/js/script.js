var linkedin = 'https://www.linkedin.com/in/allie-watkins-1944581aa';

//create on click of phone, email and linkedin for it to display my phone number, email me, go to my linkedIn page

$('#linkedin').on('click', function() {
    $(location).attr('href', linkedin);
})

$('#phone').on('click', function() {
    event.preventDefault();
    var phonenum = $('<div>').text('704-606-4089');
    $('.contactclicker').addClass('hide');
    $('#phone').append(phonenum);
})

$('#email').on('click', function() {
    var emailaddress = $('<div>').text('allielynne20@gmail.com');
    $('.contactclicker').addClass('hide');
    event.preventDefault();
    $('#email').append(emailaddress);
})

//create on click for the resume to show as well

