import dayjs from 'dayjs';

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

const ponerCeros = (numero, cantidadCeros) => {
  const numeroString = numero.toString();
  if (numeroString.length >= cantidadCeros) return numeroString;
  return '0'.repeat(cantidadCeros - numeroString.length) + numeroString;
};
