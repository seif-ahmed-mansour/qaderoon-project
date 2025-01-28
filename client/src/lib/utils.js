/**
 * Generates an infinite sequence of incrementing numbers starting from a specified value.
 * @param {number} start - The initial number to start generating IDs from.
 * @yields {number} The next incremental number in the sequence.
 */
export function* idGenerator(start = 1) {
  let i = start;

  while (true) {
    yield i;
    i++;
  }
}
