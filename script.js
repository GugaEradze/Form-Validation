var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName()
{
    var name = document.getElementById('contact-name').value.trim();

    if(name.length === 0) 
    {
        nameError.innerHTML = 'Name Is Required';
        return false;
    }

    if(!/^[A-Za-z\s\-']+$/.test(name))
    {
        nameError.innerHTML = 'Name Should Only Contain Letters';
        return false;
    }

    var words = name.split(/\s+/);
    if(words.length < 2) 
    {
        nameError.innerHTML = 'Write Full Name';
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() 
{
    var phoneInput = document.getElementById('contact-phone');
    var phone = phoneInput.value;


    if (phone.trim().length === 0) 
    {
        phoneError.innerHTML = 'Phone Number Is Required';
        return false;
    }

    if (phone.replace(/\D/g, '').length !== 9) 
    {
        phoneError.innerHTML = 'Phone Number Must Be 9 Digits';
        return false;
    }

    if (!/^\d+$/.test(phone.replace(/\s/g, ''))) 
    {
        phoneError.innerHTML = 'Insert Digits Only';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function insertSpaces(input) 
{
    var value = input.value.replace(/\s/g, '');
    var newValue = '';
    for (var i = 0; i < value.length; i++) 
    {
        if (i > 0 && i % 3 === 0)
        {
            newValue += ' ';
        }
        newValue += value[i];
    }
    input.value = newValue;
}

var phoneInput = document.getElementById('contact-phone');
phoneInput.addEventListener('input', function() 
{
    insertSpaces(this);
    validatePhone();
});

function validateEmail()
{
    var email = document.getElementById('contact-email').value;

    if(email.length == 0)
    {
        emailError.innerHTML = 'Email Is Required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._0-9]+@[A-Za-z]+\.[a-z]{2,4}$/))
    {
        emailError.innerHTML = 'Invalid Email';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage()
{
    var message = document.getElementById('contact-message').value;
    var required = 20;
    var left = required - message.length;

    if(left > 0)
    {
        messageError.innerHTML = left + ' More Characters Required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm()
{
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage())
    {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Fix Error To Submit';
        setTimeout(function()
        {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
}