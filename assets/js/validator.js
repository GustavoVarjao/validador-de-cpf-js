let control;
//control é usado na multiplicação de cada dígito do cpf

const msg = document.querySelector('.msg');

document.addEventListener('click', e => {
  if (e.target.classList.contains('btn')) {
    control = 10;
    validator();
  }
});

const validator = () => {
  const methods = {
    reduce: cpfArray =>
      cpfArray
        .split('')
        .map((cpfNumber, i) => cpfNumber * (control - i))
        .reduce((cpfValue, cpfNumber) => (cpfValue += cpfNumber), 0),
  };
  Object.setPrototypeOf(methods, {
    valid() {
      msg.innerText = 'O CPF é valido!';
      msg.style.backgroundColor = '#0f0';
    },
    invalid() {
      msg.innerText = 'O CPF não é valido!';
      msg.style.backgroundColor = '#f22';
    },
  });

  const cpf = document.querySelector('.cpf-input');

  if (cpf.value.length !== 14) {
    methods.invalid();
    return;
  }

  const cpfArray = cpf.value.replace(/\./g, '').split('-');

  let cpfNumbers = cpfArray[0];
  //cpfNumbers é a parte dos 9 primeiros dígitos do cpf

  while (control < 12) {
    let digit = 11 - (methods.reduce(cpfNumbers) % 11);
    if (digit > 9) digit = 0;

    cpfNumbers += digit;
    control++;
  }

  if (cpfNumbers.substring(9) === cpfArray[1]) {
    methods.valid();
  } else {
    methods.invalid();
  }
};
