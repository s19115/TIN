function validateForm() {
    const nameInput = document.getElementById("Name");
    const damageInput = document.getElementById("DamageValue");
    const damageTypeInput = document.getElementById("DamageType");

    const errorName = document.getElementById("errorName");
    const errorDamage = document.getElementById("errorDamageValue");
    const errorDamageType = document.getElementById("errorDamageType");
    const errorsSummary = document.getElementById("errorSummary");

    resetErrors([nameInput, damageInput, damageTypeInput], [errorName, errorDamage, errorDamageType], errorsSummary);


    let valid = true;

    if(!validationOn()) return true;

    // noinspection DuplicatedCode
    if (!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nameInput.value, 2, 60)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    // noinspection DuplicatedCode
    if (!checkRequired(damageInput.value)) {
        valid = false;
        damageInput.classList.add("error-input");
        errorDamage.innerText = "Pole jest wymagane";
    } else if (!checkIfNumber(damageInput.value)) {
        valid = false;
        damageInput.classList.add("error-input");
        errorDamage.innerText = "Pole powinno zawierać liczbę";
    } else if (!checkIfNaturalInRange(1, 1000, damageInput.value)) {
        valid = false;
        damageInput.classList.add("error-input");
        errorDamage.innerText = "Pole powinno zawierać liczbę całkowitą z przedziału 1-10 000";
    }

    // noinspection DuplicatedCode
    if (!checkRequired(damageTypeInput.value)) {
        valid = false;
        damageTypeInput.classList.add("error-input");
        errorDamageType.innerText = "Pole jest wymagane";
    }
    else if (!checkTextLengthRange(damageTypeInput.value, 2, 60)) {
        valid = false;
        damageTypeInput.classList.add("error-input");
        errorDamageType.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }


    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;

}