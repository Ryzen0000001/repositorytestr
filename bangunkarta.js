function press(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
    press(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
