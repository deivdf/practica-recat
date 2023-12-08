import { useState } from 'react'
//import './App.css'
import Header from './componentes/header';
import Listapacientes from './componentes/listapacientes';
import Formulario from './componentes/formulario';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});//este es el paciente que vamos a editar
  return (
    
    <div className="container mx-auto mt-20">
      <Header /> 
      <div className='mt-12 md:flex'>
         <Formulario 
           pacientes={pacientes}
           setPacientes={setPacientes}
           paciente={paciente}
         />
          <Listapacientes pacientes={pacientes}
          setPaciente={setPaciente}
          />
          
      </div>
    </div>
  );
}

export default App
