import React from 'react'

const Error = ({mensaje}) => {
  return (
    <p 
      className="bg-red-100 text-red-700 text-center font-bold uppercase rounded border-l-4 border-l-red-500 py-2 px-4 mb-4">
      {mensaje}
    </p>
  )
}

export default Error