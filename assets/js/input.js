const addChar = (char, i) => {
  const inputArray = input.value.split('');
  inputArray.splice(i, 0, char);
  return inputArray.reduce((cpfString, char) => (cpfString += char));
};

const input = document.querySelector('.cpf-input');

input.addEventListener('keypress', e => {
  const key = e.charCode;
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
});

input.addEventListener('paste', () => {
  setTimeout(() => {
    if (input.value.length == 14) return;
    let i = 3;
    while (i <= 11) {
      if (i !== 11) {
        input.value = addChar('.', i);
      } else {
        input.value = addChar('-', i);
      }
      i += 4;
    }
  }, Number.MIN_VALUE);
});

input.addEventListener('input', e => {
  const length = input.value.length;

  if (e.inputType === 'deleteContentBackward') return;

  if (length == 4 || length == 8) input.value = addChar('.', -1);
  if (length == 12) input.value = addChar('-', -1);
});
