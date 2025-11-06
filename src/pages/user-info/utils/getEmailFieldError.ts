export function getEmailFieldError(value: string | undefined) {
  if (!value) {
    return "Please complete this field.";
  }

  //simple RegExp pattern to validate email addresses: a sequence of non-whitespace characters, followed by an @, followed by more non-whitespace characters, a dot, and more non-whitespace
  const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

  const result = regex.test(value);

  if (!result) {
    return "Please use a valid email address.";
  }

  return null;
}
