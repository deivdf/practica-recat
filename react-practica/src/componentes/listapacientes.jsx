import Paciente from './paciente';
import {useEffect} from 'react'

const listaPacientes = ({pacientes, setPaciente, eliminarPaciente})=> {
  //comprueba si hay un paciente o no
  useEffect(()=>{if(pacientes.length>0){
    console.log('nuevo paciente')
  }},[pacientes])
  return (
    //este es el componente reaccionara cuando ayamos agregado un paciente
    <div className='md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll'>
      
      {pacientes && pacientes.length ? (
        <>
          <h2 className='text-3xl uppercase text-indigo-300 mt-5 font-bold text-center '>Lista de Pacientes</h2>
          <p className='text-xl text-center'>
            Administra tus
            {' '}
            <span className='text-indigo-300 font-bold'>Pacientes</span>
          </p>
          {pacientes.map( paciente =>( 
              <Paciente 
                key={paciente.id}
               paciente = {paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
        </>
      ): 
      //este es el componente reaccionara cuando no ayamos agregado un paciente
      (
        <>
      
            <h2 className='text-3xl uppercase text-indigo-300 mt-5 font-bold text-center '>No hay Lista de Pacientes</h2>
            <p className='text-xl text-center'>
              Aqui veras la lista de
              {' '}
              <span className='text-indigo-300 font-bold'>Pacientes</span>
            </p>
        </>
      )}
    </div>
  );
}

export default listaPacientes;