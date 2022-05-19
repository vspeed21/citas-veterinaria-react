
const Paciente = ({paciente, setPaciente, eliminarId}) => {
  const { nombre, propietario, email, fechaAlta, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar este paciente?')

    if(respuesta) {
      eliminarId(id)
    }
  }

  return (
    <ul className='bg-white shadow-md m-3 px-5 py-10 rounded-xl'>
        <li>
          <label className='font-bold block mb-2 text-gray-700'>Nombre: {''}
            <span className='font-normal normal-case'>{nombre}</span>
          </label>
        </li>

        <li>
          <label className='font-bold block mb-2 text-gray-700'>Propietario: {''}
            <span className='font-normal capitalize'>{propietario}</span>
          </label>
        </li>

        <li>
          <label className='font-bold block mb-2 text-gray-700'>E-mail: {''}
            <span className='font-normal'>{email}</span>
          </label>
        </li>

        <li>
          <label className='font-bold block mb-2 text-gray-700'>Fecha de alta: {''}
            <span className='font-normal'>{fechaAlta}</span>
          </label>
        </li>

        <li>
          <label className='font-bold block mb-2 text-gray-700'>Sintomas: {''}
            <span className='font-normal'>{sintomas}</span>
          </label>
        </li>

        <li className="flex justify-end mt-7">
          <button 
            className="py-2 px-8 bg-indigo-600 hover:bg-indigo-700 font-bold uppercas text-white transition-colors rounded mr-3"
            type="button"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>

          <button 
            className="py-2 px-8 bg-red-600 hover:bg-red-700 font-bold uppercas text-white transition-colors rounded"
            type="button"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </li>
      </ul>
  )
}

export default Paciente