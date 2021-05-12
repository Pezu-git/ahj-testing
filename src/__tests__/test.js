/* eslint-disable no-plusplus */
/* eslint-disable operator-linebreak */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line import/named
import Appear from '../js/Appear.js';
import Map from '../js/Map.js';

test('Appear test', () => {
  const board = document.createElement('div');
  board.classList.add('board');
  document.body.appendChild(board);

  for (let i = 0; i < 16; i++) {
    const newMap = document.createElement('div');
    newMap.classList.add('map');
    board.appendChild(newMap);
    const newImgDiv = document.createElement('div');
    newImgDiv.classList.add('img');
    newMap.appendChild(newImgDiv);
    const imgDiv = new Image();
    imgDiv.src = 'https://github.com/netology-code/ahj-homeworks/blob/simplification/dom/pic/goblin.png?raw=true';
    imgDiv.classList.add('goblin');
    newImgDiv.appendChild(imgDiv);
  }
  const newAppear = new Appear(1);
  newAppear.appear();
  const goblin = document.querySelectorAll('.goblin');
  const received = goblin[0].classList.contains('active');
  expect(received).toBeTruthy();
});
test('Appear test', () => {
  const newMap = new Map(16);
  newMap.add();
  const received = document.body.firstChild.className.includes('board');
  expect(received).toBeTruthy();
});
