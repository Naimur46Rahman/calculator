// Insert value into the display
function insert(num) {
  document.getElementById("result").value += num;
}

// Clear all input
function clearDisplay() {
  document.getElementById("result").value = "";
}

// Delete last character
function backspace() {
  let current = document.getElementById("result").value;
  document.getElementById("result").value = current.slice(0, -1);
}

// Evaluate expression
function calculate() {
  try {
    let expression = document.getElementById("result").value;
    let result = eval(expression);
    document.getElementById("result").value = result;
  } catch {
    document.getElementById("result").value = "Error";
  }
}