const Card = ({ titulo, esMayor180, data, info }) => {
  const { nombre } = data
  console.log('card', titulo, nombre, esMayor180)
  console.log('array de objetos', info)

  const [elem1, elem2, elem3, ...rest] = info

  console.log({ elem1, elem2, elem3, rest })

  const obj1 = { nombre: 'Plaza 1', direccion: '9 de julio' }
  //   const obj2 = obj1
  const obj2 = { ...obj1 }

  obj2.nombre = 'test'

  console.log(obj1)

  return <h1>{titulo}</h1>
}

export default Card
