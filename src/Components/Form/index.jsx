// ## Form

import { useState } from 'react'

// Crear un component `Form` que

// - renderice algunos `inputs` (3 o 4) y un `button` que diga "Enviar"
// - al apretar enviar, debe chequear que los inputs no estén vacíos
// - si alguno está vacío, debe mostrar un mensaje que diga "Por favor, complete todos los campos"
// - si ninguno está vacío, debe mostrar un mensaje que diga "Gracias por completar el formulario, sus datos han sido guardados" y debe vaciar todos los campos
const Form = () => {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState(0)
  const [email, setEmail] = useState('')
  console.log({ nombre, edad, email })

  const handleOnSubmit = (event) => {
    event.preventDefault()
    if (!(nombre && edad && email)) {
      alert('Por favor, complete todos los campos')
    } else {
      alert('Gracias por completar el formulario, sus datos han sido guardados')
      setNombre('')
      setEdad(0)
      setEmail('')
    }
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="nombre">nombre</label>
      <input value={nombre} type="text" id="nombre" onChange={(event) => { setNombre(event.target.value) }}/>

      <label htmlFor="edad">edad</label>
      <input value={edad} type="number" id="edad" onChange={(event) => { setEdad(event.target.value) }}/>

      <label htmlFor="email">email</label>
      <input value={email} type="email" id="email" onChange={(event) => { setEmail(event.target.value) }} />

      <button type="submit">Guardar</button>
    </form>
  )
}

export default Form
