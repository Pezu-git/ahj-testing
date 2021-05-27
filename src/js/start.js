/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
// import Appear from './Appear.js';
import Map from './Map.js';
import Validator from './Validator.js';
import FindPaySistem from './FindPaySistem.js';

export default function start() {
  const newMap = new Map(3, ['visa', 'mastercard', 'americanExpress']);
  newMap.add();
  const newValidator = new Validator();
  newValidator.validateUsername();
  const newFindPaySistem = new FindPaySistem();
  newFindPaySistem.cardSystem();
}
start();
