/* eslint-disable linebreak-style */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
export default class Map {
  constructor(square) {
    this.square = square;
    this.cardArr = {
      visa: 'https://findicons.com/files/icons/2250/payment_icon_set/64/visa.png',
      mastercard: 'https://findicons.com/files/icons/2250/payment_icon_set/64/mastercard.png',
      americaExpress: 'https://findicons.com/files/icons/2250/payment_icon_set/64/american_express.png',
      discover: 'https://findicons.com/files/icons/2669/lovicons_payments/64/discover.png',
    };
    // this.cardArrGray = {
    //   visa: 'https://findicons.com/files/icons/2780/payment_card_glyphs/64/visa.png',
    //   mastercard: 'https://findicons.com/files/icons/2780/payment_card_glyphs/64/american_express.png',
    //   americanExpress: 'https://findicons.com/files/icons/2780/payment_card_glyphs/64/discover.png',
    // };
  }

  add() {
    const cardNameArr = [];
    for (const key in this.cardArr) {
      cardNameArr.push(key);
    }
    const board = document.createElement('div');
    board.classList.add('board');
    document.body.appendChild(board);
    const boardListItems = document.createElement('ul');
    boardListItems.classList.add('map');
    board.appendChild(boardListItems);
    for (let i = 0; i < this.square; i++) {
      const newImgBlock = document.createElement('li');
      newImgBlock.classList.add('img');
      boardListItems.appendChild(newImgBlock);
      const imgCard = new Image();
      imgCard.src = this.cardArr[cardNameArr[i]];
      imgCard.classList.add('card');
      imgCard.classList.add(cardNameArr[i]);
      newImgBlock.appendChild(imgCard);
    }
    const forma = document.createElement('form');
    forma.classList.add('validateForm');
    board.appendChild(forma);
    const formGroup = document.createElement('div');
    formGroup.classList.add('form_group');
    forma.appendChild(formGroup);
    const input = document.createElement('input');
    input.classList.add('form_control');
    input.type = 'text';
    input.placeholder = 'Credit card number';
    formGroup.appendChild(input);
    const btn = document.createElement('a');
    btn.classList.add('btn');
    btn.textContent = 'Click to Validate';
    formGroup.appendChild(btn);
  }
}
