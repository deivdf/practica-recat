import Formulario from './formulario'
const Paciente = ({paciente, setPaciente}) => {
  const {nombre, apellido, cedula, telefono, email, fecha, hora, sintomas} = paciente
  return (
    <div className='m-16 shadow-md bg-white rounded-lg py-10 px-5'>
        <h2 className="text-xl font-bold text-center ">Datos personales del Paciente</h2>
        <p className="text-gray-600 font-bold pb-2">Nombre: {' '}
        <span className='font-normal normal-case'> {paciente.nombre}</span></p>
        <p className="text-gray-600 font-bold pb-2">Apellido: {' '}
        <span className='font-normal normal-case'> {paciente.apellido} </span></p>
        <p className="text-gray-600 font-bold pb-2">Cedula: {' '}
      <span className='font-normal normal-case'>{paciente.cedula} </span></p>
      <p className="text-gray-600 font-bold pb-2">Telefono: {' '}
      <span className='font-normal normal-case'> {paciente.telefono}</span></p>
      <p className="text-gray-600 font-bold pb-2">Email: {' '}
      <span className='font-normal normal-case'> {paciente.email} </span></p>
      <p className="text-gray-600 font-bold pb-2">Sintomas: {' '}
     <span className='font-normal normal-case'> {paciente.sintomas} </span>
     </p>
     <div className='flex justify-between'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 uppercase mt-10 rounded-lg'
        onClick={() => setPaciente(paciente)}
     >
        Editar
      </button>
      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 uppercase mt-10 rounded-lg ml-2'
      >
        Eliminar
      </button>
     </div>
    </div>
  )
}
export default Paciente
