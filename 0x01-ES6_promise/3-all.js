import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploadPhotoResponse = uploadPhoto();
  const uploadcreateUser = createUser();

  return Promise.all([
    uploadPhotoResponse,
    uploadcreateUser,
  ])
    .then((responses) => console.log(`${responses[0].body} ${responses[1].firstName} ${responses[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
