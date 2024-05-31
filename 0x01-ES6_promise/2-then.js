export default function handleResponseFromAPI(promise) {
  const resolveResponse = {
    status: 200,
    body: 'success',
  };

  return promise
    .then(() => resolveResponse)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
