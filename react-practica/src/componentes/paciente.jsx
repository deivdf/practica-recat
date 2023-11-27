import Formulario from './formulario'
export default function paciente() {

  return (
    <div className='m-16 shadow-md bg-white rounded-lg py-10 px-5'>
        <h2 className="text-xl font-bold text-center ">Datos personales del Paciente</h2>
        <p className="text-gray-600 font-bold pb-2">Nombre: {' '}
        <span className='font-normal normal-case'> hook</span></p>
        <p className="text-gray-600 font-bold pb-2">Apellido: {' '}
        <span className='font-normal normal-case'> rios</span></p>
        <p className="text-gray-600 font-bold pb-2">Cedula: {' '}
      <span className='font-normal normal-case'>000111 </span></p>
      <p className="text-gray-600 font-bold pb-2">Telefono: {' '}
      <span className='font-normal normal-case'> 65465645</span></p>
      <p className="text-gray-600 font-bold pb-2">Email: {' '}
      <span className='font-normal normal-case'> eas@asdas.com</span></p>
      <p className="text-gray-600 font-bold pb-2">Sintomas: {' '}
     <span className='font-normal normal-case'> Lorem ipsum dolor sit amet 
    consectetur, adipisicing elit. Est similique, esse ut ducimus consectetur 
    officia ipsum aperiam, iste illum veniam 
    dolorem velit itaque atque laborum reprehenderit quasi. Quasi, odio 
    porro.</span></p>
    </div>
  )
}
