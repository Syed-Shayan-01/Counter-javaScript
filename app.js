
var value = document.getElementById("value");
value.innerHTML = 0;

function increaseValue() {
    value.innerHTML = +value.innerHTML + 1;
}

function decreaseValue() {
    value.innerHTML = +value.innerHTML - 1;
    if (value.innerHTML < 0) {
        value.innerHTML = 0;
    }
}

function resetValue() {
    if (value.innerHTML > 0) {
        value.innerHTML = 0;
    }
}
