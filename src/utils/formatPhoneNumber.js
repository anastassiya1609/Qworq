// Форматирование номера телефона
export function formatPhoneNumber(input) {
  const numbers = input.replace(/\D/g, ""); // Оставляем только цифры
  if (numbers.length === 0) return "";

  let formatted = "+7";
  
  // Преобразуем строку в массив, чтобы использовать unshift
  const numberArray = Array.from(numbers);

  // Если первый символ — "8", заменяем его на "7"
  if (numberArray[0] === "8") numberArray[0] = "7";
  // Если первый символ не "7", добавляем его в начало
  if (numberArray[0] !== "7") numberArray.unshift("7");

  // Форматируем номер телефона
  if (numberArray.length > 1) formatted += ` (${numberArray.slice(1, 4).join("")}`;
  if (numberArray.length > 4) formatted += `) ${numberArray.slice(4, 7).join("")}`;
  if (numberArray.length > 7) formatted += `-${numberArray.slice(7, 9).join("")}`;
  if (numberArray.length > 9) formatted += `-${numberArray.slice(9, 11).join("")}`;

  return formatted;
};
