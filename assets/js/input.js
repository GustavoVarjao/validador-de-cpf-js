const addChar = (char, i) => {
  const inputArray = input.value.split('');
  inputArray.splice(i, 0, char);
  input.value = inputArray.reduce((cpfString, char) => (cpfString += char));
};

const input = document.querySelector('.cpf-input');

input.addEventListener('input', () => {
  input.value = input.value.replace(/[^\d]/g, '');
  const length = input.value.length;

  if (length >= 3) addChar('.', 3);
  if (length >= 6) addChar('.', 7);
  if (length >= 9) addChar('-', 11);
});
