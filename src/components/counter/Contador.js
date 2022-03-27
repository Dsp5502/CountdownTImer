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

  @media (max-width: 560px) {
    width: 100%;
  }
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

  @media (max-width: 560px) {
    width: 100px;
  }
`;
const DivCard = styled.div`
  width: 100px;
  height: 100px;
  /* border: 1px solid red; */
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom,
    hsl(235, 16%, 14%),
    hsl(236, 21%, 26%)
  );
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: -3px 10px 14px 0px rgba(0, 0, 0, 0.82);

  @media (max-width: 560px) {
    width: 70px;
    height: 70px;
  }
`;
const SpanCounter = styled.span`
  margin: 10px auto;
  font-size: 10px;
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 5px;

  @media (max-width: 560px) {
    font-size: 7px;
  }
`;
const SpanNumeros = styled.span`
  /* border: 1px solid red; */
  width: 100px;
  height: 100px;
  margin: 0 60px;
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  color: hsl(345, 95%, 68%);

  @media (max-width: 560px) {
    width: 50px;
    font-size: 40px;
  }
`;

//* Definimos el contador
const contadorInicial = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};

const Contador = ({ cuentaRegresivaMS }) => {
  /**
   * *Definimos el estado del contador, le ponemos el contador
   * *inicial como su estado por defecto y lo desestructuramos
   */
  const [contador, setContador] = useState(contadorInicial);
  const { seconds, minutes, hours, days } = contador;

  /**
   * * En el useEffect definimos un intervalo cada  1segundo
   * * Dentro de ese  intervalo  pasamos una funcion que actualiza el tiempo
   * * y recibe por props la  en milisegundos  la cuenta regresiva
   *
   */
  useEffect(() => {
    const id = setInterval(() => {
      actualizaTiempo(cuentaRegresivaMS);
    }, 1000);
    return () => clearInterval(id);
  }, [cuentaRegresivaMS]);

  /**
   * *En esta funcion recibimos por parametro  la cuenta regresiva en ms
   * * la cual la pasamos en la funcion obtenerTiempo y actualizamos el estado  del contador
   */

  const actualizaTiempo = (contador) => {
    setContador(obtenerTiempoAntes(contador));
  };

  return (
    <DivContainer>
      <DivContador>
        <DivCard>
          <SpanNumeros>{days}</SpanNumeros>
        </DivCard>
        <SpanCounter>days</SpanCounter>
      </DivContador>
      <DivContador>
        <DivCard>
          <SpanNumeros>{hours}</SpanNumeros>
        </DivCard>
        <SpanCounter>hours</SpanCounter>
      </DivContador>
      <DivContador>
        <DivCard>
          <SpanNumeros>{minutes}</SpanNumeros>
        </DivCard>
        <SpanCounter>minutes</SpanCounter>
      </DivContador>
      <DivContador>
        <DivCard>
          <SpanNumeros>{seconds}</SpanNumeros>
        </DivCard>
        <SpanCounter>seconds</SpanCounter>
      </DivContador>
    </DivContainer>
  );
};

export default Contador;
