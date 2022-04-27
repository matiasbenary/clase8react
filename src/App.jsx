
import './App.css'
import Card from './Components/Card'
import Counter from './Components/Counter'
import Form from './Components/Form'

function App () {
  const edad = 27
  const nombre = 'matias'
  const esMayor180 = true
  const lugar = { nombre: 'Plaza', direccion: '9 de julio' }
  const lugares = [
    { nombre: 'Plaza 1', direccion: '9 de julio' },
    { nombre: 'Plaza 2', direccion: '10 de julio' },
    { nombre: 'Plaza 3', direccion: '11 de julio' },
    { nombre: 'Plaza 4', direccion: '12 de julio' },
    { nombre: 'Plaza 5', direccion: '13 de julio' },
    { nombre: 'Plaza 6', direccion: '14 de julio' },
    { nombre: 'Plaza 7', direccion: '15 de julio' }
  ]
  return (
    <div className="App">
      <Form></Form>
      <Card
      anio={edad}
      nombre={nombre}
      titulo="Festejo"
      esMayor180={esMayor180}
      esMayorEdad
      data={lugar}
      info={lugares}
      />
      <Counter></Counter>
    </div>
  )
}

export default App
