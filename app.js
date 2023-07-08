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

let errorMsg, checkContent;

submitButton.disabled = true;
submitButton.style.opacity = 0.5;

function validateInput(p, input, min, max, pattern, errorMsg, checkContent) {
    if (input.value.length >= min && input.value.length <= max && pattern.test(input.value))
    {
        p.innerHTML = "";
        input.style.borderColor = "green";
        return true;
    }
    p.innerHTML = errorMsg;
    input.style.borderColor = "red";
    return false;
}

// calling functions for each element

function validateFirstnameInput()
{
    return validateInput(firstnameP, firstnameInput, 3, 16, /^[0-9a-zA-Z]*$/, "First name must be alphanumeric and contain 3 - 16 characters", checkContent);
}
  
function validateLastnameInput()
{
    return validateInput(lastnameP, lastnameInput, 3, 16, /^[0-9a-zA-Z]*$/, "Last name must be alphanumeric and contain 3 - 16 characters", checkContent);
}

function validateEmailInput()
{
    return validateInput(emailP, emailInput, 7, 100, /^[0-9a-zA-Z@.]*$/, "Email must a valid address, e.g. example@example.com", checkContent);
}

function validatePasswordInput()
{
    return validateInput(passwordP, passwordInput, 6, 20, /^[0-9a-zA-Z@_-]*$/, "Password must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 characters", checkContent);
}

function validateTelephoneInput()
{
    return validateInput(telephoneP, telephoneInput, 11, 11, /^[0-9]*$/, "A valid Telephone number (11 digits and 333-333-3334)", checkContent);
}

function validateBioInput()
{
    return validateInput(bioP, bioInput, 8, 50, /^[0-9a-zA-Z_-]*$/, "Bio must contain only lowercase letters, underscores, hyphens and be 8 - 50 characters", checkContent);
}

allInput.forEach(input =>
    {
        input.addEventListener("blur", () =>
        {
            validateInput(input.nextElementSibling, input, 0, 0, null, "", true);
        });
    });

function validateAllFields(btn)
{
    const validators =
    [
        validateFirstnameInput,
        validateLastnameInput,
        validateEmailInput,
        validatePasswordInput,
        validateTelephoneInput,
        validateBioInput
    ];

    const isValid = validators.every(validator => validator());
    btn.disabled = !isValid;
    btn.style.opacity = isValid ? 1 : 0.5;
    btn.style.cursor = isValid ? "pointer" : "auto";

    return (isValid);
}

document.body.addEventListener("click", () =>
{
    validateAllFields(submitButton);
});