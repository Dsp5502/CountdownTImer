import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { obtenerTiempoAntes } from './utils/utils';

const DivContainer = styled.div`
  width: 600px;
  height: 100px;
  border: 1px solid red;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SpanCounter = styled.span`
  margin: 0 5px;
`;

const contadorInicial = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};
const Contador = ({ cuentaRegresivaMS }) => {
  const [contador, setContador] = useState(contadorInicial);
  const { seconds, minutes, hours, days } = contador;

  useEffect(() => {
    const id = setInterval(() => {
      actualizaTiempo(cuentaRegresivaMS);
    }, 1000);
    return () => clearInterval(id);
  }, [cuentaRegresivaMS]);

  const actualizaTiempo = (contador) => {
    setContador(obtenerTiempoAntes(contador));
  };

  return (
    <DivContainer>
      <SpanCounter>{days}</SpanCounter>
      <SpanCounter>days</SpanCounter>
      <SpanCounter>{hours}</SpanCounter>
      <SpanCounter>hours</SpanCounter>
      <SpanCounter>{minutes}</SpanCounter>
      <SpanCounter>minutes</SpanCounter>
      <SpanCounter>{seconds}</SpanCounter>
      <SpanCounter>seconds</SpanCounter>
    </DivContainer>
  );
};

export default Contador;
