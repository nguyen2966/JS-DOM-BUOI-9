export function validateNumber(num){
  return !(Number.isNaN(num) || num < 0);
}