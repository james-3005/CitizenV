export const validatePassword = (pass) => {
  const regex = /^(?!.*<[^>]+>).*/;
  if (!regex.test(pass) || pass.length >= 20 || pass.length < 6)
    return 'Password dài tối đa 6-20 ký tự và không chứa HTML';
  return null;
};

export const validateUsername = (pass) => {
  const regex = /^[A-Za-z0-9_.]*$/;
  if (!regex.test(pass) || pass.length >= 20)
    return 'Username dài tối đa 20 ký tự và không chứa HTML';
  return null;
};
