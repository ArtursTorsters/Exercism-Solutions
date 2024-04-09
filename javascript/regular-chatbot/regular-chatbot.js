// @ts-nocheck

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {

  return /^chatbot/i.test(command)

}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {

return message.replace(/emoji[0-9]+/g, '')

}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {

  if (/^\(\+[0-9][0-9]\) [0-9]{3}-[0-9]{3}-[0-9]{3}$/.test(number)) {
    return 'Thanks! You can now download me to your phone.'
  }
  return `Oops, it seems like I can't reach out to ${number}`

}



/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
  const found = userInput.match(expression)
  return found

}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
 
  const name = fullName.replace(/([a-z]+), ([a-z]+)/i, '$2 $1')
console.log("namess",fullName)
  return `Nice to meet you, ${name}`

}
