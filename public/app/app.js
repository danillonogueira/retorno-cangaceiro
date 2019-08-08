import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';

document
  .querySelector('#myButton')
  .addEventListener('click', () => {
    return service
      .sumItems('2143')
      .then(log)
      .catch(log);
  });