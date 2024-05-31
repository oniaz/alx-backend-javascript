import { uploadPhoto } from "./utils.js"
import { createUser } from "./utils.js"

export default function handleProfileSignup() {
    const uploadPhotoResponse = uploadPhoto();
    const uploadcreateUser = createUser();

    Promise.all([
        uploadPhotoResponse,
        uploadcreateUser
    ])
        .then(responses => console.log(`${responses[0].body} ${responses[1].firstName} ${responses[1].lastName}`))
        .catch(() => console.log('Signup system offline'))
}