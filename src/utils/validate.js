export const checkValidaData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordIsValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Email Is not in valid format";
  if (!isPasswordIsValid) return "Password Is not in valid";
  return null;
};
