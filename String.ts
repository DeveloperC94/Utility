/**
 * funziona univoca per formattazione numerica in fase di visilità
 *
 * @param { String }
 *          _str - valore stringa
 * @param { Number }
 *          _type - type Remove space
 *          case 1 - tutti gli spazi
 *          case 2 - prima e dopo spazi
 *          case 3 - prima e dopo spazi
 *          case 4 - dopo spazi
 * 
 **/

const removeSpace = (str: string, type: number) => {
  if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
  switch (type) {
    case 1:
      return str.replace(/\s/g, "");
    case 2:
      return str.replace(/(^\s)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s)/g, "");
    case 4:
      return str.replace(/(\s$)/g, "");
    default:
      return str;
  }
};


/**
 * funziona univoca per formattazione numerica in fase di visilità
 *
 * @param { String }
 *          str - valore stringa da convertire
 * @param { Number }
 *          type - type Remove space
 *          case 1 - tutti maiuscolo
 *          case 2 - tutti minuscolo
 *          case 3 - inizio maiuscolo
 * 
 **/
const caseConversion = (str: string, type: number) => {
    switch (type) {
        case 1:
            return str.toUpperCase();
        case 2:
            return str.toLowerCase();
        case 3:
            return str[0].toUpperCase() + str.substr(1).toLowerCase();
        default:
            return str;
    }
};

/**
 * funziona univoca per formattazione numerica in fase di visilità
 *
 * @param { Array }
 *          el - array di selettori
 * 
 * Example: hide( document.querySelectorAll ('img'))
 * 
 **/
const hideTag = (...el) => [...el].forEach(e => (e.style.display = 'none'));