/**
 * URL https://www.codewars.com/kata/handshake-problem
 *
 * NAME Handshake problem
 *
 * DESCRIPTION
 * Johnny is a farmer and he annually holds a beet farmers convention "Drop
 * the beet".
 * Every year he takes photos of farmers handshaking. Johnny knows that no
 * two farmers handshake more than once. He also knows that some of the
 * possible handshake combinations may not happen.
 *
 * However, Johnny would like to know the minimal amount of people that
 * participated this year just by counting all the handshakes.
 *
 * Help Johnny by writing a function, that takes the amount of handshakes and
 * returns the minimal amount of people needed to perform these handshakes (a
 * pair of farmers handshake only once).
 *
 * TESTS
 * Test.assertEquals(getParticipants(0), 1)
 * Test.assertEquals(getParticipants(1), 2)
 * Test.assertEquals(getParticipants(3), 3)
 * Test.assertEquals(getParticipants(6), 4)
 * Test.assertEquals(getParticipants(7), 5)
 */

function getParticipants(handshakes) {
  let participants = 1;
  while (Math.floor((participants * (participants - 1)) / 2) < handshakes) {
    participants += 1;
  }
  return participants;
}

module.exports = getParticipants;
