let x = undefined;

switch (typeof x) {
  case "number":
    console.log("это число");
    break;
  case "string":
    console.log("это строка");
    break;
  case "boolean":
    console.log("это логический тип");
    break; 
  default:
    console.log("тип x не определён")
}
