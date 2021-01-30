function validateForm() {
    const dropChanceInput = document.getElementById("DropChance");
    const dateFromInput = document.getElementById("DateFrom");
    const dateToInput = document.getElementById("DateTo");
    const minDifficultyInput = document.getElementById("MinDifficulty");
    const minSizeOfGroupInput = document.getElementById("MinSizeOfGroup");
    const bossId=document.getElementById("BossName");
    const weaponId=document.getElementById("WeaponName");


    const errorDropChance = document.getElementById("errorDropChance");
    const errorDateFrom = document.getElementById("errorDateFrom");
    const errorDateTo = document.getElementById("errorDateTo");
    const errorMinDifficulty = document.getElementById("errorMinDifficulty");
    const errorMinSizeOfGroup = document.getElementById("errorMinSizeOfGroup");
    const errorWeaponId = document.getElementById("errorWeapon_id")
    const errorBossId=document.getElementById("errorBoss_id");

    const errorsSummary = document.getElementById("errorSummary");

    resetErrors([dropChanceInput, dateFromInput, dateToInput, minDifficultyInput, minSizeOfGroupInput,bossId,weaponId], [errorDropChance, errorDateFrom, errorDateTo, errorMinDifficulty, errorMinSizeOfGroup,errorBossId,errorWeaponId], errorsSummary);

    let valid = true;

    if(!validationOn()) return true;

    if (!checkRequired(dropChanceInput.value)) {
        valid = false;
        dropChanceInput.classList.add("error-input");
        errorDropChance.innerText = "Pole jest wymagane";
    } else if (!checkIfNumber(dropChanceInput.value)) {
        valid=false;
        dropChanceInput.classList.add("error-input");
        errorDropChance.innerText="Pole powinno zawierać liczbę"
    }else if(!checkIfInRange(0,100,dropChanceInput.value)){
        valid=false;
        dropChanceInput.classList.add("error-input");
        errorDropChance.innerText="Liczba musi być z przedziału 0 i 100 "
    }else if(!checkPrecision(3,dropChanceInput.value)){
        valid=false;
        dropChanceInput.classList.add("error-input");
        errorDropChance.innerText="Dopuszczalna precyzja: 3 znaki po przecinku"
    }

    if(!checkRequired(dateFromInput.value)){
        valid=false;
        dateFromInput.classList.add("error-input");
        errorDateFrom.innerText="Pole jest wymagane";
    }

    if(!checkIfAfterStartingDate(dateFromInput.value,dateToInput.value)){
        valid =false;
        dateToInput.classList.add("error-input");
        errorDateTo.innerText="Data końca nie może być wcześniejsza niż data początku!";
    }


    if (!checkRequired(minDifficultyInput.value)) {
        valid = false;
        minDifficultyInput.classList.add("error-input");
        errorMinDifficulty.innerText = "Pole jest wymagane";
    } else if (!checkIfNumber(minDifficultyInput.value)) {
        valid = false;
        minDifficultyInput.classList.add("error-input");
        errorMinDifficulty.innerText = "Pole powinno zawierać liczbę";
    } else if (!checkIfNaturalInRange(1, 10, minDifficultyInput.value)) {
        valid = false;
        minDifficultyInput.classList.add("error-input");
        errorMinDifficulty.innerText = "Pole powinno zawierać liczbę całkowitą z przedziału 1-10 000";
    }

    // noinspection DuplicatedCode
    if (!checkRequired(minSizeOfGroupInput.value)) {
        valid = false;
        minSizeOfGroupInput.classList.add("error-input");
        errorMinSizeOfGroup.innerText = "Pole jest wymagane";
    } else if (!checkIfNumber(minSizeOfGroupInput.value)) {
        valid = false;
        minSizeOfGroupInput.classList.add("error-input");
        errorMinSizeOfGroup.innerText = "Pole powinno zawierać liczbę";
    } else if (!checkIfNaturalInRange(1, 100, minSizeOfGroupInput.value)) {
        valid = false;
        minSizeOfGroupInput.classList.add("error-input");
        errorMinSizeOfGroup.innerText = "Pole powinno zawierać liczbę całkowitą z przedziału 1-10 000";
    }

    if(!checkRequired(bossId.value)){
        valid=false;
        bossId.classList.add("error-input");
        errorBossId.innerText="Pole jest wymagane"
    }
    if(!checkRequired(weaponId.value)){
        valid=false;
        weaponId.classList.add("error-input");
        errorWeaponId.innerText="Pole jest wymagane"
    }



    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;

}