// both should work i think
// export default function uploadPhoto(filename) {
//   return new Promise((resolve, reject) => {
//     reject(new Error(`${filename} cannot be processed`));
//   });
// }
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
