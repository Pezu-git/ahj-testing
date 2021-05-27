/* eslint-disable linebreak-style */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import cardArr from './cardLink.js';

export default class Map {
  constructor(square, cardSistem) {
    if (!/^[1-9]+$/.test(square)) {
      throw new Error('Передайте колличество карт для проверки');
    }
    if (cardSistem === undefined) {
      throw new Error('Передайте массив с платжными системами');
    }
    this.square = square;
    this.cardSistem = cardSistem;
  }

  add() {
    // добавление контейнера
    const board = document.createElement('div');
    board.classList.add('board');
    document.body.appendChild(board);
    // добавление полей для изображений в виде списка
    const boardListItems = document.createElement('ul');
    boardListItems.classList.add('map');
    board.appendChild(boardListItems);
    for (let i = 0; i < this.square; i++) {
      const newImgBlock = document.createElement('li');
      newImgBlock.classList.add('img');
      boardListItems.appendChild(newImgBlock);
      // вставка изображений платёжных карт
      const imgCard = new Image();
      imgCard.src = cardArr[this.cardSistem[i]];
      imgCard.classList.add('card');
      imgCard.classList.add(this.cardSistem[i]);
      newImgBlock.appendChild(imgCard);
    }
    // создание формы для валидации
    const forma = document.createElement('form');
    forma.classList.add('validateForm');
    board.appendChild(forma);
    const formGroup = document.createElement('div');
    formGroup.classList.add('form_group');
    forma.appendChild(formGroup);
    // строка ввода
    const input = document.createElement('input');
    input.classList.add('form_control');
    // eslint-disable-next-line no-alert
    input.type = 'text';
    input.placeholder = 'Credit card number';
    formGroup.appendChild(input);
    // кнопка
    const btn = document.createElement('a');
    btn.classList.add('btn');
    btn.textContent = 'Click to Validate';
    formGroup.appendChild(btn);
  }
}
