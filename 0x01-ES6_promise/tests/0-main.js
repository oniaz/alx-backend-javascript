import getResponseFromAPI from './0-promise';

const response = getResponseFromAPI();
console.log(response instanceof Promise);

response
  .then((message) => {
    console.log('Resolved:', message);
  })
  .catch((error) => {
    console.error('Rejected:', error);
  });
