export default class Validator {
  static validateUsername(username) {
    return /^[a-z][\w-]*[a-z]$/i.test(username) && /\d{,3}/.test(username);
  }
}
