export const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const validateEmail = (value) => {
  if (!emailPattern.test(value) || value.length < 6) {
    return 'Please use a real email address.'
  }
  return null
}
