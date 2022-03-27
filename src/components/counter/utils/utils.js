import dayjs from 'dayjs';

/**
 * * Utilice la libreria 'dayjs'
 * *  definimos la fecha actual y la fecha para la cuenta regresiva
 * * tambien definimos un condicional para cuando el contador llegue a 0 no cuente en negativo
 */

export const obtenerTiempoAntes = (tiempoMS) => {
  const tiempoDayJS = dayjs(tiempoMS);
  const actualDayJS = dayjs();
  if (tiempoDayJS.isBefore(actualDayJS)) {
    return { seconds: '00', minutes: '00', hours: '00', days: '00' };
  }

  return {
    seconds: segundosRestantes(actualDayJS, tiempoDayJS),
    minutes: minutosRestantes(actualDayJS, tiempoDayJS),
    hours: horasRestantes(actualDayJS, tiempoDayJS),
    days: diasRestantes(actualDayJS, tiempoDayJS),
  };
};

/*
 *  la funcion diff  no ayudas sacar la diferencia entre las dos fechas  y
 * nos devuleve un entero el cual   le sacamos  su modulo y ese valor resultante
 * lo guardamos en unavariable y lo retornamos
 */

const segundosRestantes = (actualDayJS, tiempoDayJS) => {
  const seconds = tiempoDayJS.diff(actualDayJS, 'seconds') % 60;
  return ponerCeros(seconds, 2);
};
const minutosRestantes = (actualDayJS, tiempoDayJS) => {
  const minutes = tiempoDayJS.diff(actualDayJS, 'minutes') % 60;
  return ponerCeros(minutes, 2);
};
const horasRestantes = (actualDayJS, tiempoDayJS) => {
  const hours = tiempoDayJS.diff(actualDayJS, 'hours') % 24;
  return ponerCeros(hours, 2);
};
const diasRestantes = (actualDayJS, tiempoDayJS) => {
  const days = tiempoDayJS.diff(actualDayJS, 'days');
  return days.toString();
};

//* Aqui  arregla el formato para  que cuando sea un digito ejemplo 3 lo cmabie a  03
const ponerCeros = (numero, cantidadCeros) => {
  const numeroString = numero.toString();
  if (numeroString.length >= cantidadCeros) return numeroString;
  return '0'.repeat(cantidadCeros - numeroString.length) + numeroString;
};
