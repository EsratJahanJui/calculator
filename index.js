function addToDisplay(value) {
    document.querySelector('[name="display"]').value += value;
  }

  function clearDisplay() {
    document.querySelector('[name="display"]').value = '';
  }

  function deleteLast() {
    let display = document.querySelector('[name="display"]');
    display.value = display.value.toString().slice(0, -1);
  }

  function calculate() {
    let display = document.querySelector('[name="display"]');
    try {
        display.value = parseFloat(math.evaluate(display.value).toFixed(2));
    } catch (error) {
      display.value = 'Error';
    }
  }

  function square() {
    let display = document.querySelector('[name="display"]');
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = (Math.pow(value, 2)).toFixed(1);
    } else {
      display.value = 'Error';
    }
  }

  function squareRoot() {
    let display = document.querySelector('[name="display"]');
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = (Math.sqrt(value)).toFixed(1);
    } else {
      display.value = 'Error';
    }
  }