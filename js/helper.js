export function validateNumber(num){
  if (typeof num === "string" && num.trim() === "") return false;

  const value = Number(num);
  return Number.isFinite(value) && value >= 0;
}
