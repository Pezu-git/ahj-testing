/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
// import Appear from './Appear.js';
import Map from './Map.js';
import Validator from './Validator.js';
import FindCard from './FindCard.js';

export default function start() {
  const newMap = new Map(3);
  newMap.add();
  const newValidator = new Validator();
  newValidator.validateUsername();
  const newFindCard = new FindCard();
  newFindCard.findCard();
}
start();