export default function handleResponseFromAPI(promise) {
  const successResponse = {
    status: 200,
    body: 'Success',
  };
  promise
    .then(() => (successResponse))
    .catch((err) => (err))
    .finally(() => {
      console.log('Got a response from the API');
    });
}
