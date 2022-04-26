import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(5)
  const [show, setShow] = useState(false)
  return <div>
      <h1>{counter}{counter > 5 && 'Felicitaciones'}</h1>
      <button onClick={(event) => {
        console.log(event)
        alert('reset')
        setCounter(0)
      }}> reset </button>
      <button onClick={() => {
        setCounter(prevState => {
          return prevState + 1
        })
      }} > +1 </button>
      <button onClick={() => {
        setCounter(prevState => {
          return prevState - 1
        })
      }}> -1 </button>

      <input type={show ? 'text' : 'password'} />
      <button onClick={() => { setShow(prevState => !prevState) }}>change</button>
      </div>
}

export default Counter
