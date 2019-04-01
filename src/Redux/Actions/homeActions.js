export const PLUS_ONE = 'PLUS_ONE';
export const MINUS_ONE = 'MINUS_ONE';

export const CountAdjusters = {
  PLUS_ONE: 'PLUS_ONE',
  MINUS_ONE: 'MINUS_ONE',
  count: 0,
}

export function plusOne(input) {
  return { type: PLUS_ONE, input }
}

export function minusOne(input) {
  return { type: MINUS_ONE, input }
}

export default {plusOne, minusOne};