function resetErrors(inputs, errorTexts, errorInfo) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error-input");
    }
    for (let i = 0; i < errorTexts.length; i++) {
        errorTexts[i].innerText = "";
    }
    errorInfo.innerText = "";
}
function checkRequired(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    return value !== "";

}
function checkTextLengthRange(value, min, max) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const length = value.length;
    if (max && length > max) {
        return false;
    }
    return !(min && length < min);

}
function checkEmail(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(value);
}

function checkIfNumber(value) {
    return !isNaN(value);
}
function checkIfInRange(lowerBound,upperBound,value){
    if(value<lowerBound)return false;
    if(value>upperBound)return false;
    return true;
}
function checkIfNaturalInRange(lowerBound,upperBound, value){
    if(value<lowerBound) return false;
    if(value>upperBound) return false;

    // noinspection EqualityComparisonWithCoercionJS
    return Math.floor(value)==value;
}
function checkIfAfterStartingDate(startDate,endDate){
    const dateFrom=new Date(startDate);
    const dateTo=new Date(endDate);
    return !(dateTo < dateFrom && dateTo != null);

}
