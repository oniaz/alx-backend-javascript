import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    .then((results) => results.map(
      (obj) => (obj.value
        ? obj
        : { status: obj.status, value: obj.reason.toString() }),
    ));
}
