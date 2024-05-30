export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const x = Math.floor(Math.random() * 10);
    if (x < 5) {
      resolve(`${x}, about right!`);
    } else {
      reject(new Error(`${x}, that's too big.`));
    }
  });
}
