/// <reference path="./global.d.ts" />
// @ts-check


export function createVisitor(name, age, ticketId) {
  const obj = {
    visitor: {
      name: name,
      age: age,
      ticketId: ticketId,
    }
  }

  return obj.visitor
}


export function revokeTicket(visitor) {
  visitor.ticketId = null
  return visitor
}





/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {

  return tickets[ticketId] === null ? "not sold" : tickets[ticketId] ? "sold to " + tickets[ticketId] : "unknown ticket id";

}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ??  "invalid ticket !!!";}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  return visitor?.gtc?.version;}
