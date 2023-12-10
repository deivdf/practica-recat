import Error from './error';
import {useState, useEffect} from 'react';
// tomar los datos del formulario y agregarlos al state de pacientes guardados en variables const y useState
const formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');
  const[error, setError] = useState(false);
/*comprueba si hay un paciente o no y si hay un paciente y 
presionamos el boton editar se traen los valores que tiene el objeto en cuiestion*/
  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setApellido(paciente.apellido);
      setCedula(paciente.cedula);
      setTelefono(paciente.telefono);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setHora(paciente.hora);
      setSintomas(paciente.sintomas);
    }
 
  
  },[paciente])

 
  // Generar un id unico para cada paciente
  const generarId = () => {
    const math= Math.random().toString(36).substring(2,9);
    const fecha = new Date().getTime().toString(36);
    return math + fecha;

  }
  //Cuando el usuario envia el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    //Validar el formulario que no este vacio en los campos
    if([nombre, apellido, cedula, telefono, email, fecha, hora, sintomas].includes('')){
      //Mostrar el error
     setError(true);
     return;
    }
    //Eliminar el mensaje de error
    setError(false);
    //Enviar el formulario al componente principal
    const Objetopaciente = {
      nombre,
      apellido,
      cedula,
      telefono,
      email,
      fecha,
      hora,
      sintomas,
    }
    if(paciente.id){
      Objetopaciente.id = paciente.id;
      //editar el paciente existente
      const PacienteEditado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? Objetopaciente : pacienteState);
      setPacientes(PacienteEditado);
      setPaciente({});
    }else{
      Objetopaciente.id = generarId();
      //Agregar el paciente al state
      setPacientes([...pacientes, Objetopaciente]);
    }
    

    //Reiniciar el formulario
    setNombre('');
    setApellido('');
    setCedula('');
    setTelefono('');
    setEmail('');
    setFecha('');
    setHora('');
    setSintomas('');
    
  }
  // Revisar si hay pacientes
  pacientes.length > 0 && console.log(pacientes);
  return (
    
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='text-3xl uppercase text-indigo-300 mt-5 font-bold text-center '>Formulario</h2> 
         <p className='text-xl text-center'>
          añade un paciente y {' '}
          <span className='text-indigo-300 font-bold'>comienza a hacer el seguimiento</span>  
        </p>
      <form
       onSubmit={handleSubmit} 
        className='m-2 shadow-md bg-white rounded-lg py-10 px-5'>
        {/*si hay un error muestra el mensaje de error  y si no hay no muestra nada manda el mensaje atraves de un children*/}
          {error && <Error><p className='text-center'>Todos los campos son obligatorios</p></Error>}
        <div className="mb-3">
          <label htmlFor="nombre" className="block text-gray-900 text-sm font-bold mb-2 ">Nombre: {nombre}</label>
          <input 
          id='nombre' 
          type="text" 
          placeholder='Nombre del paciente'
          className="border-2 placeholder-gray-400 p-2 mt-2 rounded-md shadow-md w-full"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="block text-gray-900 text-sm font-bold mb-2 ">Apellido:</label>
          <input 
          id='apellido' 
          type="text" 
          placeholder='Apellido del paciente'
          className="border-2 placeholder-gray-400 p-2 mt-2 rounded-md shadow-md w-full" 
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cedula" className="block text-gray-900 text-sm font-bold mb-2 ">Cedula:</label>
          <input 
          id='cedula' 
          type="text" 
          placeholder='cedula del paciente'
          className="border-2 placeholder-gray-400 p-2 mt-2 rounded-md shadow-md w-full" 
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="block text-gray-900 text-sm font-bold mb-2 ">Telefono:</label>
          <input 
          id='telefono' 
          type="text" 
          placeholder='Telefono del paciente'
          className="border-2 placeholder-gray-400 p-2 mt-2 rounded-md shadow-md w-full" 
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-900 text-sm font-bold mb-2 ">Email:</label>
          <input 
          id='email' 
          type="email" 
          placeholder='Email del paciente'
          className="border-2 placeholder-gray-400 p-2 mt-2 rounded-md shadow-md w-full" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="block text-gray-900 text-sm font-bold mb-2 ">Fecha:</label>
          <input 
          id='fecha' 
          type="date" 
          placeholder='Fecha del paciente'
          className="border-2 placeholder-gray-400 p-2 mt-2 rounded-md shadow-md w-full" 
          value={fecha}
          onChange={(e) => setFecha(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hora" className="block text-gray-900 text-sm font-bold mb-2 ">Hora:</label>
          <input 
          id='hora' 
          type="time" 
          placeholder='Hora del paciente'
          className="border-2 placeholder-gray-400 p-2 mt-2 rounded-md shadow-md w-full" 
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sintomas" className="block text-gray-900 text-sm font-bold mb-2 ">Sintomas:</label>
          <textarea 
          id='sintomas' 
          type="text"
          placeholder='Sintomas del paciente'
          className="border-2 placeholder-gray-400 p-2 mt-2 rounded-md shadow-md w-full" 
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        {/*si hay un paciente y presionamos el boton editar se cambia el texto del boton a editar paciente y si no hay un paciente y presionamos el boton agregar se cambia el texto del boton a agregar paciente*/}
        <div>
          <input type="submit" 
          value={Object.keys(paciente).length > 0 ? 'Editar Paciente' : 'Agregar Paciente' }
          className='bg-indigo-300 hover:bg-indigo-400 w-full p-2 text-white uppercase font-bold  cursor-pointer'
          
          />
        </div>
      </form>
    </div>
  )
}

export default formulario
