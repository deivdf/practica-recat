
import Listapacientes from './listapacientes.jsx';
import React, { Component } from 'react'
import Formulario from './formulario.jsx';

export default class header extends Component {
  render() {
    return (
      <div className='text-center'>
        <h1 className='text-5xl uppercase text-gray-600 mt-5 font-black md:w-2/3 mx-auto'>Segimiento Pacientes
        <span className='text-5xl uppercase text-indigo-300 mt-5 font-black'> Covid-19</span>
        </h1>
      </div>
    )
  }
}
