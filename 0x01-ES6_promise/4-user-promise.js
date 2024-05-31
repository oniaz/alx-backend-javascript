export default function signUpUser(firstName, lastName) {
  const rsolveResponse = {
    firstName,
    lastName,
  };
  return new Promise((resolve) => resolve(rsolveResponse));
}
