export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const successResponse = {
      status: 200,
      body: 'Success',
    };

    if (success) {
      resolve(successResponse);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
