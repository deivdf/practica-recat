
import Paciente from './paciente';
function listaPacientes() {
  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll'>
        <h2 className='text-3xl uppercase text-indigo-300 mt-5 font-bold text-center '>Lista de Pacientes</h2>
        <p className='text-xl text-center'>
          Aqui encontraras la lista de
          {' '}
          <span className='text-indigo-300 font-bold'>Pacientes</span>
        </p>
          <Paciente />
          <Paciente />
       
    </div>
  );
}

export default listaPacientes;