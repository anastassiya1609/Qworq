export function formatPhoneNumber(input) {
  const numbers = input.replace(/\D/g, ""); 
  if (numbers.length === 0) return "";

  let formatted = "+7";
  
  const numberArray = Array.from(numbers);

  if (numberArray[0] === "8") numberArray[0] = "7";

  if (numberArray[0] !== "7") numberArray.unshift("7");


  if (numberArray.length > 1) formatted += ` (${numberArray.slice(1, 4).join("")}`;
  if (numberArray.length > 4) formatted += `) ${numberArray.slice(4, 7).join("")}`;
  if (numberArray.length > 7) formatted += `-${numberArray.slice(7, 9).join("")}`;
  if (numberArray.length > 9) formatted += `-${numberArray.slice(9, 11).join("")}`;

  return formatted;
};
