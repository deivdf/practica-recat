// Objetivo: componente de error con children y props
const error = ({children})=> {
  // children es un prop que se pasa como parametro a la funcion error
  return (
    <div className='bg-red-600 text-center uppercase font-blod text-white rounded-2xl p-2 m-2'>
            {children}
    </div>
  )
}
export default error