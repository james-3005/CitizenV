export const validatePassword = (pass) => {
  const regex = /^(?!.*<[^>]+>).*/;
  if (!regex.test(pass) || pass.length >= 20 || pass.length < 6)
    return 'Password dài tối đa 6-20 ký tự và không chứa HTML';
  return null;
};

export const validateUsername = (username) => {
  const regex = /^[A-Za-z0-9_.]*$/;
  if (!regex.test(username) || username.length >= 20 || username.length < 2)
    return 'Username dài tối đa 2-8 ký tự và không chứa HTML';
  return null;
};
