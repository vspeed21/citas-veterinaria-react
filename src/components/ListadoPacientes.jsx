import { useEffect } from 'react'
import Paciente from './Paciente'

function ListadoPacientes({ pacientes, setPaciente, eliminarId}) {
  //Iterar con un map porque retorna uno nuevo

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto'>

      {pacientes.length > 0 ? (
        <div>
          <h2 className='font-black text-3xl text-center'>Listado de pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
          </p>

          {pacientes.map(paciente => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarId={eliminarId}
              />
            )

          })}
        </div>
      ) : (
        <div>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Agrega y {''}
            <span className='text-indigo-600 font-bold'>apareceran abajo</span>
          </p>
        </div>
      )}

    </div>
  )
}

export default ListadoPacientes