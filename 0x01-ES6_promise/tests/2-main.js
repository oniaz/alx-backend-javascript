import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
const resp = handleResponseFromAPI(promise);
console.log(resp);