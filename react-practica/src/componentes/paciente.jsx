import Formulario from './formulario'
export default function paciente({paciente}) {
  //console.log(paciente)
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
     <span className='font-normal normal-case'> {paciente.sintomas} </span></p>
    </div>
  )
}
