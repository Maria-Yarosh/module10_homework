const result = +prompt("Введите число", "");

if (typeof +result !== "number") {
  alert("Ошибка")
} else if (isNaN(result % 2)) {
  alert("Вы ввели не число")
} else if (result % 2 === 0) {
  alert("Четное")
} else {
  alert("Нечетное")
} 
