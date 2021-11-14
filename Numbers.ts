/**
 * funziona univoca per formattazione numerica in fase di visilità
 *
 * @param { String }
 *          currency - valuta da inserire prima del numero
 * @param { Number }
 *          n - input numerico come parametro
 * @param { Number}
 *          decimal - numero decimali da inserire
 *
 * Example: 1234 -> 1 234,00
 **/
const formatNumber = (currency: string = "", n: number, decimal: number = 2) =>
  currency +
  n
    .toFixed(decimal)
    .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
    .replace(/\./g, ",");

/**
 * @param { Number } min
 *          min - numero minimo nel range
 * @param { Number } max
 *          max - numero max nel range
 **/
const RandomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
