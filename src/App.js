import './App.css';
import Contador from './components/counter/Contador';

function App() {
  return (
    <div className='App'>
      <div className='App2'>
        <h1>WE'RE LAUNCHING SOON</h1>
        <Contador cuentaRegresivaMS={1650997936743} />
        <div className='iconos'>
          <img
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1648320926/counter/icon-facebook_nt2a5u.svg'
            alt='facebook Icon'
          />
          <img
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1648320926/counter/icon-instagram_wdllu4.svg'
            alt='Pinterest Icon'
          />
          <img
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1648320926/counter/icon-pinterest_exiwhe.svg'
            alt='Instagram Icon'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
