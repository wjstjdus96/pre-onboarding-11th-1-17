export const checkValidation = (email, password) => {
  return !(/.*@.*/.test(email) && password.length >= 8);
};
