/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
export default class FindCard {
  findCard() {
    const input = document.querySelector('input');
    const visaImg = document.querySelector('.visa');
    const masterImg = document.querySelector('.mastercard');
    const amexpImg = document.querySelector('.americaExpress');
    // const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const visa = /^(?:4)$/;
    // const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    const master = /^(?:5[1-5])$/;
    // const amexpRegEx = /^(?:3[47][0-9]{13})$/;
    const americanExpress = /^(?:3[47])$/;
    // const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    input.addEventListener('keyup', (e) => {
      console.log(e.key);
      if (visa.test(input.value)) {
        console.log('visa');
        masterImg.style.opacity = '0.2';
        amexpImg.style.opacity = '0.2';
      }
      if (master.test(input.value)) {
        console.log('master');
        visaImg.style.opacity = '0.2';
        amexpImg.style.opacity = '0.2';
      }
      if (americanExpress.test(input.value)) {
        console.log('america');
        visaImg.style.opacity = '0.2';
        masterImg.style.opacity = '0.2';
      }
      if (input.value === '') {
        visaImg.style.opacity = '1';
        masterImg.style.opacity = '1';
        amexpImg.style.opacity = '1';
      }
    });
  }
}
