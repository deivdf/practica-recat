import { useState } from 'react'
//import './App.css'
import Header from './componentes/header';
import Listapacientes from './componentes/listapacientes';
import Formulario from './componentes/formulario';

function App() {
  const [pacientes, setPacientes] = useState([]);
  return (
    
    <div className="container mx-auto mt-20">
      <Header /> 
      <div className='mt-12 md:flex'>
         <Formulario 
           pacientes={pacientes}
           setPacientes={setPacientes}
         />
          <Listapacientes />
          
      </div>
    </div>
  );
}

export default App