/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
import cardRegexp from './cardRegexp.js';

export default class FindPaySistem {
  cardSystem() {
    const input = document.querySelector('input');
    const visaImg = document.querySelector('.visa');
    const masterImg = document.querySelector('.mastercard');
    const amexpImg = document.querySelector('.americanExpress');
    input.addEventListener('input', () => {
      if (cardRegexp.visa.test(input.value)) {
        masterImg.classList.add('notThis');
        amexpImg.classList.add('notThis');
      }
      if (cardRegexp.master.test(input.value)) {
        visaImg.classList.add('notThis');
        amexpImg.classList.add('notThis');
      }
      if (cardRegexp.americanExpress.test(input.value)) {
        masterImg.classList.add('notThis');
        visaImg.classList.add('notThis');
      }
      if (input.value === '') {
        visaImg.classList.remove('notThis');
        masterImg.classList.remove('notThis');
        amexpImg.classList.remove('notThis');
      }
    });
  }
}
