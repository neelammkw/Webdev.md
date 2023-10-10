const generateBtn = document.getElementById("generate-btn");
const passwordField = document.getElementById("password");
const lengthField = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

generateBtn.addEventListener("click", () => {
    const length = +lengthField.value;
    const useUppercase = uppercaseCheckbox.checked;
    const useLowercase = lowercaseCheckbox.checked;
    const useNumbers = numbersCheckbox.checked;
    const useSymbols = symbolsCheckbox.checked;

    passwordField.value = generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols);
});

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    let charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (symbols) charset += "!@#$%^&*()_-+=<>?";

    if (charset.length === 0) {
        alert("Please select at least one character type.");
        return "";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    return password;
}