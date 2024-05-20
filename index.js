const displayElement = document.getElementById('display');

    function appendToDisplay(value) {
      displayElement.value += value;
    }
    function clearDisplay() {
      displayElement.value = '';
    }

    function calculateResult() {
      try {0
        const result = eval(displayElement.value.replace('x', '*'));
        displayElement.value = result;
      } catch (error) {
        displayElement.value = 'Error';
      }
    }