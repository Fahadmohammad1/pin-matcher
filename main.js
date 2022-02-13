function getPin() {
  const randomPin = Math.round(Math.random() * 10000);
  const pinString = randomPin + "";
  if (pinString.length == 4) {
    return randomPin;
  } else {
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("pin-input").value = pin;
}
document.getElementById("key-pad").addEventListener("click", function (event) {
  const key = event.target.innerText;

  const keyInput = document.getElementById("keypad-input");
  if (isNaN(key)) {
    if (key == "C") {
      keyInput.value = "";
    }
  } else {
    const previousKey = keyInput.value;
    const newKey = previousKey + key;
    keyInput.value = newKey;
  }
});
