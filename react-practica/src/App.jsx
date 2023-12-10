import { useState, useEffect } from 'react'
import Header from './componentes/header';
import Listapacientes from './componentes/listapacientes';
import Formulario from './componentes/formulario';

function App() {
  const [pacientes, setPacientes] = useState([]);//este es el state de los pacientes que vamos a guardar
  const [paciente, setPaciente] = useState({});//este es el paciente que vamos a editar
  console.log('pacientes estan',pacientes);
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));//guardamos los pacientes en el localstorage
  }, [pacientes]);//este es el useEffect que se ejecuta cuando se actualiza el state de pacientes
  const eliminarPaciente = (id) =>{//esta funcion recibe el id del paciente que vamos a eliminar
    const actualizarEliminado = pacientes.filter(paciente => paciente.id !== id); //filtramos el paciente que no tiene el id que le pasamos
    setPacientes(actualizarEliminado);  //actualizamos el state de pacientes
  }

  return (
    
    <div className="container mx-auto mt-20">
      <Header /> 
      <div className='mt-12 md:flex'>
         <Formulario 
           pacientes={pacientes}
           setPacientes={setPacientes}
           paciente={paciente}
           setPaciente={setPaciente}
         />
          <Listapacientes pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          />
          
      </div>
    </div>
  );
}

export default App
