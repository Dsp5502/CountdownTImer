import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { obtenerTiempoAntes } from './utils/utils';

const DivContainer = styled.div`
  width: 600px;
  height: 300px;
  /* border: 1px solid red; */
  font-size: 30px;
  display: flex;

  justify-content: center;
  align-items: center;
`;
const DivContador = styled.div`
  width: 150px;
  height: 200px;
  /* border: 1px solid red; */
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SpanCounter = styled.span`
  margin: 0 25px;
  font-size: 10px;
  font-weight: normal;
`;
const SpanNumeros = styled.span`
  /* border: 1px solid red; */
  width: 100px;
  height: 100px;
  margin: 0 60px;
  font-size: 80px;
  text-align: center;
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
      <DivContador>
        <SpanNumeros>{days}</SpanNumeros>
        <SpanCounter>days</SpanCounter>
      </DivContador>
      <DivContador>
        <SpanNumeros>{hours}</SpanNumeros>
        <SpanCounter>hours</SpanCounter>
      </DivContador>
      <DivContador>
        <SpanNumeros>{minutes}</SpanNumeros>
        <SpanCounter>minutes</SpanCounter>
      </DivContador>
      <DivContador>
        <SpanNumeros>{seconds}</SpanNumeros>
        <SpanCounter>seconds</SpanCounter>
      </DivContador>
    </DivContainer>
  );
};

export default Contador;
