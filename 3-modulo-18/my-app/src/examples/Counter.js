import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  const [MensajeError, cambiarValor] = useState ('')

  const addCount = () => {
    cambiarValor('')
    if (count < 30) {
    setCount( count + 1 )
  } else {
      cambiarValor('Se admite hasta 30')
    

  }
  }
  const substractCount = () => {
    cambiarValor('')
    if (count == 0) {
      cambiarValor("No se puede restar más")
    } else {
      setCount( count - 1 )
    }
   
    

    
  }
  return <div className="App" >
    <h1>Counter</h1>
    <h2>{MensajeError}</h2>
    <p><b>{ count }</b></p>
    <br /><br />
    <button onClick={addCount}> ➕</button>
    <button onClick={substractCount}> ➖</button>
  </div>
  
}

export default Counter 