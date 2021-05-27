/* eslint-disable linebreak-style */

// const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
// const visa = /^(?:4)$/;
// const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
// const master = /^(?:5[1-5])$/;
// const amexpRegEx = /^(?:3[47][0-9]{13})$/;
// const americanExpress = /^(?:3[47])$/;
// const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

const cardRegexp = {
  onlyNumber: /^[0-9]+$/,
  visa: /^(?:4)$/,
  master: /^(?:5)$/,
  americanExpress: /^(?:3)$/,
};
export default cardRegexp;
