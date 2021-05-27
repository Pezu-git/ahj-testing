/* eslint-disable no-plusplus */
/* eslint-disable operator-linebreak */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line import/named
// import Appear from '../js/Appear.js';
import Map from '../js/Map.js';
import FindPaySistem from '../js/FindPaySistem.js';

test('Добавление HTML', () => {
  const newMap = new Map(2, ['visa', 'mastercard']);
  newMap.add();
  const received = document.body.firstChild.className.includes('board');
  expect(received).toBeTruthy();
});

test('Ошибка при попытке передать не цифровое значение для контейнеров изображений', () => {
  expect(() => new Map('f', ['visa', 'mastercard'])).toThrow();
});

test('Ошибка при отсутствии переданного массива с платежными системами', () => {
  expect(() => new Map(3)).toThrow();
});

test('Проверка наличия изображений', () => {
  const newMap = new Map(2, ['visa', 'mastercard']);
  newMap.add();
  const receivedVisa = document.querySelector('.visa');
  const receivedAmexp = document.querySelector('.americanExpress');
  expect(receivedVisa).not.toBeNull();
  expect(receivedAmexp).toBeNull();
});

test('Тест на выбор Visa', () => {
  const newFindPaySistem = new FindPaySistem();
  const newMap = new Map(3, ['visa', 'mastercard', 'americanExpress']);
  newMap.add();
  newFindPaySistem.cardSystem();
  const input = document.querySelector('input');
  const event = new Event('input');
  const masterImg = document.querySelector('.mastercard');
  input.value = 4;
  input.dispatchEvent(event);
  expect(masterImg.className.includes('notThis')).toBeTruthy();
});
test('Тест на выбор MasterCard', () => {
  const newFindPaySistem = new FindPaySistem();
  const newMap = new Map(3, ['visa', 'mastercard', 'americanExpress']);
  newMap.add();
  newFindPaySistem.cardSystem();
  const input = document.querySelector('input');
  const event = new Event('input');
  const visa = document.querySelector('.visa');
  input.value = 5;
  input.dispatchEvent(event);
  expect(visa.className.includes('notThis')).toBeTruthy();
});
test('Тест на выбор AmExp', () => {
  const newFindPaySistem = new FindPaySistem();
  const newMap = new Map(3, ['visa', 'mastercard', 'americanExpress']);
  newMap.add();
  newFindPaySistem.cardSystem();
  const input = document.querySelector('input');
  const event = new Event('input');
  const americanExpress = document.querySelector('.americanExpress');
  input.value = 3;
  input.dispatchEvent(event);
  expect(americanExpress.className.includes('notThis')).toBeTruthy();
});
test('Пустое поле ввода', () => {
  const newFindPaySistem = new FindPaySistem();
  const newMap = new Map(3, ['visa', 'mastercard', 'americanExpress']);
  newMap.add();
  newFindPaySistem.cardSystem();
  const input = document.querySelector('input');
  const event = new Event('input');
  const americanExpress = document.querySelector('.americanExpress');
  input.value = '';
  input.dispatchEvent(event);
  expect(americanExpress.className.includes('notThis')).toBeFalsy();
});
