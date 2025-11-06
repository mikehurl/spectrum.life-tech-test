export function getNumericFieldError(value: string | undefined) {
  if (!value) {
    return "Please complete this field.";
  }

  //matches only strings that consist of one or more digits only
  const regex = /^[\d]+$/;

  const result = regex.test(value);

  if (!result) {
    return "Please use only digits.";
  }

  return null;
}
