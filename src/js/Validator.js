/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
// eslint-disable-next-line linebreak-style
/* eslint-disable class-methods-use-this */

export default class Validator {
  validateUsername() {
    const btnValidator = document.querySelector('.btn');
    const input = document.querySelector('input');
    btnValidator.addEventListener('click', () => {
      const arr = [];
      const cardNumber = input.value.toString();
      for (let i = 0; i < cardNumber.length; i++) {
        if (i % 2 === 0) {
          const m = parseInt(cardNumber[i], 10) * 2;
          if (m > 9) {
            arr.push(m - 9);
          } else {
            arr.push(m);
          }
        } else {
          const n = parseInt(cardNumber[i], 10);
          arr.push(n);
        }
      }
      const summ = arr.reduce((a, b) => a + b);
      if (!(summ % 10)) {
        alert('Card is valid');
      }
    });
  }
}
