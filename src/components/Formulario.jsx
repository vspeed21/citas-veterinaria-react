import { useState, useEffect } from "react"
import Error from "./Error";


const Formulario = ({ pacientes,setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect( () => {
    if( Object.keys(paciente).length > 0 ){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFechaAlta(paciente.fechaAlta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId= () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return fecha + random
  }

  function handleSubmit(e) {
    e.preventDefault();

    if([nombre, propietario, email, fechaAlta, sintomas].includes('')) {
        setError(true);
        return;
    }

    setError(false);

    const pacienteObj = {
      nombre,
      propietario,
      email,
      fechaAlta,
      sintomas,
    }

    if(paciente.id) {
      //Entrando al modo edicion
      pacienteObj.id = paciente.id;

      const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? pacienteObj : pacienteState);

      setPacientes(pacienteActualizado);
      setPaciente({});

    }else{
      //Modo agregando
      pacienteObj.id = generarId();
      setPacientes([...pacientes, pacienteObj]);

    }

    setNombre('')
    setPropietario('');
    setEmail('')
    setFechaAlta('')
    setSintomas('')
    
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Ingreso de Pacientes</h2>
      <p className='text-lg mt-5 text-center'>
        Añade pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mt-5'
      >
        {error && <Error mensaje='Todos los campos son obligatorios'/>}
        <div>
          <label htmlFor="nombre" className='block text-gray-700 font-bold'>Nombre Mascota</label>
          <input 
            className='border border-gray-300 rounded-md outline-0 p-1 w-full mt-2 placeholder-gray-400' 
            type="text"
            placeholder='Nombre de la mascota'
            id='nombre'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className='mt-5'>
          <label htmlFor="propietario" className='block text-gray-700 font-bold'>Nombre Propietario</label>
          <input 
            className='border border-gray-300 rounded-md outline-0 p-1 w-full mt-2 placeholder-gray-400' 
            type="text"
            placeholder='Nombre del propietario'
            id='propietario'
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
          />
        </div>

        <div className='mt-5'>
          <label htmlFor="email" className='block text-gray-700 font-bold'>E-mail</label>
          <input 
            className='border border-gray-300 rounded-md outline-0 p-1 w-full mt-2 placeholder-gray-400' 
            type="email"
            placeholder='Email del propietario'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='mt-5'>
          <label htmlFor="alta" className='block text-gray-700 font-bold'>
            Alta
          </label>
          <input 
            className='border border-gray-300 rounded-md outline-0 p-1 w-full mt-2 placeholder-gray-400' 
            type="date"
            id='alta'
            value={fechaAlta}
            onChange={e => setFechaAlta(e.target.value)}
          />
        </div>

        <div className='my-5'>
          <label htmlFor="sintomas" className='block text-gray-700 font-bold'>
            Sintomas
          </label>
          <textarea 
            id="sintomas" 
            className='border border-gray-300 rounded-md outline-0 p-1 w-full mt-2 placeholder-gray-400'
            placeholder='Describe los sintomas'
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
          />
        </div>

        <input 
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-colors'
          type="submit" 
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'} 
        />
      </form>
    </div>
  )
}

export default Formulario