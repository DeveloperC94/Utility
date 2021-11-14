/**
 * funziona univoca per formattazione numerica in fase di visilità
 *
 * @param { Function }
 *          fn - funziona da eseguire
 * @param { number }
 *          wait - secondi da attendere pirma dell'esecuzione della fn
 * @param { Any }
 *          ...args - agomenti da elaborare
 *
 * Example: Stampa 'test' dopo 1 secondo
 **/

 const delay = (fn: any, wait: number, ...args:any) => setTimeout(fn, wait, ...args);
 delay(
   function(text) {
     console.log(text);
   },
   1000,
   'test'
 );

/**
 * funziona univoca per formattazione numerica in fase di visilità
 *
 * @param { Function }
 *          fn - funziona da eseguire
 * @param { number }
 *          wait - secondi da attendere pirma dell'esecuzione della fn
 * @param { Any }
 *          ...args - agomenti da elaborare
 *
 * Example: 34325055574 -> '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
 **/
 const readableFormatMiliseconds = (ms: any) => {
    if (ms < 0) ms = -ms;
    const time = {
      day: Math.floor(ms / 86400000),
      hour: Math.floor(ms / 3600000) % 24,
      minute: Math.floor(ms / 60000) % 60,
      second: Math.floor(ms / 1000) % 60,
      millisecond: Math.floor(ms) % 1000
    };
    
    return Object.entries(time)
      .filter(val => val[1] !== 0)
      .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
      .join(', ');
  };