let allInput = document.querySelectorAll("input");
let firstnameInput = document.querySelector(".firstname-input");
let firstnameP = document.querySelector(".firstname-p");
let lastnameInput = document.querySelector(".lastname-input");
let lastnameP = document.querySelector(".lastname-p");
let emailInput = document.querySelector(".email-input");
let emailP = document.querySelector(".email-p");
let passwordInput = document.querySelector(".password-input");
let passwordP = document.querySelector(".password-p");
let telephoneInput = document.querySelector(".telephone-input");
let telephoneP = document.querySelector(".telephone-p");
let bioInput = document.querySelector(".your-bio-input");
let bioP = document.querySelector(".your-bio-p");
let submitButton = document.querySelector(".submit-button");

let output, checkLength, errorMsg, checkContent;

submitButton.disabled = true;
submitButton.style.opacity = 0.5;

/**
  * validateInputLength - Validates an input field length
  * @element - Element/Input field to be validated
  * @min - Minumum amount of characters expected from @element
  * @max - Maxiumum amount of characters expected from @element
  * Return: true if @element complies with min and max, else false
  */

function validateInputLength(element, min, max)
{
    if ((element.value.length >= min) && (element.value.length <= max))
    {
        return true;
    }
    return false;
}


/**
  * validateInputContent - Validates an input field characters using return
  * value from validateInputLength()
  * @element - Element/Input field to be validated
  * @checkLength - Return value from validateInputLength() - true or false
  * @extraChars - Possible extra regex characters to check for
  * Return: true if @element complies with @checkLength and
  * pattern + extraChars else false
  */

function validateInputContent(element, checkLength, extraChars='')
{
    const pattern = new RegExp(`^[0-9${extraChars}]*$`);
    const isValid = pattern.test(element.value);

    if (checkLength && isValid)
    {
        element.style.borderColor = "green";
        return true;
    }
    element.style.borderColor = "red";
    return false;
}


/**
  * validateInputField - Validates firstname input field using return value
  * from validateInputContent()
  * @element - Element/Input field to be validated
  * @checkContent - Return value from validateInputContent()
  * @errorMsg - Error message to be printed if @checkContent fails
  * Return: true if @element complies with @checkContent else false
  */

function validateInputField(element, checkContent, errorMsg)
{
    if (checkContent)
    {
        element.innerHTML = "";
        return true;
    }
    element.innerHTML = errorMsg;
    element.style.color = "red";
    return false;
}

function emailTest(input, element, errorMsg)
{
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = pattern.test(input.value);
    if (checkContent && isValidEmail)
    {
        element.innerHTML = "";
        input.style.borderColor = "green";
        return true;
    }

    element.innerHTML = errorMsg;
    element.style.color = "red";
    input.style.borderColor = "red";
    return false;
}


// calling functions for each element

function validateFirstnameInput() 
{
    output = false;
    checkLength = validateInputLength(firstnameInput, 3, 16);
    errorMsg = "First name must be alphanumeric and contain 3 - 16 characters";
    checkContent = validateInputContent(firstnameInput, checkLength, extraChars='a-zA-Z');

    if (validateInputField(firstnameP, checkContent, errorMsg))
    {
        output = true;
    }
    return (output);
}

function validateLastnameInput() 
{
    output = false;
    checkLength = validateInputLength(lastnameInput, 3, 16);
    errorMsg = "Last name must be alphanumeric and contain 3 - 16 characters";
    checkContent = validateInputContent(lastnameInput, checkLength, extraChars='a-zA-Z');

    if (validateInputField(lastnameP, checkContent, errorMsg))
    {
        output = true;
    }
    return (output);
}

function validateEmailInput() 
{
    output = false;
    checkLength = validateInputLength(emailInput, 7, 100);
    errorMsg = "Email must a valid address, e.g. example@example.com";
    checkContent = validateInputContent(emailInput, checkLength, extraChars='a-zA-Z@.');

    if (validateInputField(emailP, checkContent, errorMsg))
    {
        output = true;
    }
    return (output);
}

function validatePasswordInput() 
{
    output = false;
    checkLength = validateInputLength(passwordInput, 6, 20);
    errorMsg = "Password must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 characters";
    checkContent = validateInputContent(passwordInput, checkLength, extraChars='a-zA-Z@_-');

    if (validateInputField(passwordP, checkContent, errorMsg))
    {
        output = true;
    }
    return (output);
}

function validateTelephoneInput() 
{
    output = false;
    checkLength = validateInputLength(telephoneInput, 11, 11);
    errorMsg = "A valid Telephone number (11 digits and 333-333-3334)";
    checkContent = validateInputContent(telephoneInput, checkLength);

    if (validateInputField(telephoneP, checkContent, errorMsg))
    {
        output = true;
    }
    return (output);
}

function validateBioInput() 
{
    output = false;
    checkLength = validateInputLength(bioInput, 8, 50);
    errorMsg = "Bio must contain only lowercase letters, underscores, hyphens and be 8 - 50 characters";
    checkContent = validateInputContent(bioInput, checkLength, extraChars='a-zA-Z_-');
    if (validateInputField(bioP, checkContent, errorMsg))
    {
        output = true;
    }
    return (output);
}

firstnameInput.addEventListener("blur", () =>
{
    validateFirstnameInput();
});
lastnameInput.addEventListener("blur", () =>
{
    validateLastnameInput();
});
emailInput.addEventListener("blur", () =>
{
    validateEmailInput();
});
passwordInput.addEventListener("blur", () =>
{
    validatePasswordInput();
});
telephoneInput.addEventListener("blur", () =>
{
    validateTelephoneInput();
});
bioInput.addEventListener("blur", () =>
{
    validateBioInput();
});

function validateAllFields(btn)
{
    if (validateFirstnameInput() && validateLastnameInput() && validateEmailInput() && validatePasswordInput() && validateTelephoneInput() && validateBioInput())
    {
        btn.disabled = false;
        btn.style.opacity = 1;
        return (true);
    }
    btn.disabled = true;
    btn.style.opacity = 0.5;
    return (false);
}

document.body.addEventListener("click", () =>
{
    validateAllFields(submitButton);
});