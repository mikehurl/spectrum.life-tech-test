export function getTextFieldError(value: string | undefined) {
  if (!value) {
    return "Please complete this field.";
  }

  //matches only strings that consist of one or more letters only
  const regex = /^[a-zA-Z]+$/;

  const result = regex.test(value);

  if (!result) {
    return "Please use only letters.";
  }

  return null;
}
