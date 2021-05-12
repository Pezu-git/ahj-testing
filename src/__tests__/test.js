/* eslint-disable no-plusplus */
/* eslint-disable operator-linebreak */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line import/named
// import Appear from '../js/Appear.js';
import Map from '../js/Map.js';

test('Map test', () => {
  const newMap = new Map(16);
  newMap.add();
  const received = document.body.firstChild.className.includes('board');
  expect(received).toBeTruthy();
});
