// @ts-check
/**
 * @typedef {{
 *  name: string,
 *  email: string
 * }} User
 * @param {User} user
 * @returns {string}
 */
export function displayUser1(user) {
  return `${user.name} <${user.email}>`;
}
