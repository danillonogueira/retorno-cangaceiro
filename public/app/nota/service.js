import { handleStatus } from '../utils/promise-helpers.js';
import { partialize } from '../utils/operators.js';
import { compose } from '../utils/operators.js';

const API = 'http://localhost:3000/notas';
const getItemsFromNotas = function(notas) {
  return notas.$flatMap(nota => nota.itens);
};
const filterItemsByCode = function(code, items) {
  return items.filter(item => item.codigo === code);
};
const sumItemsValue = function(items) {
  return items.reduce((total, item) => total + item.valor, 0);
};
export const notasService = {
  listAll() {
    return fetch(API)
      .then(handleStatus)
      .catch((err) => {
        console.log(err);
        return Promise.reject('Não foi possível obter as notas fiscais');
      });
  },
  sumItems(code) {
    const filterItems = partialize(
      filterItemsByCode,
      code
    );
    const sumItems = compose(
      sumItemsValue,
      partialize(filterItemsByCode, code),
      getItemsFromNotas
    );

    return this.listAll().then(sumItems);
  } 
};