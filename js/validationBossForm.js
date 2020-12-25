function validateForm(){
    const nameInput=document.getElementById("Name");
    const locationInput=document.getElementById("Location");
    const hpInput=document.getElementById("Hp");

    const errorName=document.getElementById("errorName");
    const errorLocation=document.getElementById("errorLocation");
    const errorHp=document.getElementById("errorHp");
    const errorsSummary=document.getElementById("errorSummary");

    //resetErrors([nameInput, locationInput, hpInput], [errorName, errorLocation, errorHp], errorsSummary);

    let valid=true;

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
    if (!checkRequired(locationInput.value)) {
        valid = false;
        locationInput.classList.add("error-input");
        errorLocation.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(locationInput.value, 2, 60)) {
        valid = false;
        locationInput.classList.add("error-input");
        errorLocation.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if (!checkRequired(hpInput.value)) {
        valid = false;
        hpInput.classList.add("error-input");
        errorHp.innerText = "Pole jest wymagane";
    } else if (!checkIfNumber(hpInput.value)) {
        valid = false;
        hpInput.classList.add("error-input");
        errorHp.innerText = "Pole powinno zawierać liczbę";
    } else if (checkIfNaturalInRange(1,10000,hpInput.value)) {
        valid = false;
        hpInput.classList.add("error-input");
        errorHp.innerText = "Pole powinno zawierać liczbę całkowitą z przedziału 1-10 000";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}