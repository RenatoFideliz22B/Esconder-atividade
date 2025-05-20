import { useState } from "react"

export function App() {

  const [numero, setNumero] = useState(100)
  const [mostrarEsconder, setMostrarEsconder] = useState(false)

  function handleAumentar() {
    setNumero(numero + 100)
  }

  function handlemostrarEsconder() {
    setMostrarEsconder(!mostrarEsconder)
  }

  return (
    <main>
     <section>
      <p>Numero: {numero}</p>

      <button onClick={handleAumentar}>Aumentar</button> 
     </section>

     <section>

      <h2>aaaaa</h2>
      {mostrarEsconder ? <p>aaaaa</p> : ""}
      <button onClick={handlemostrarEsconder}>Escondido</button>
     </section>
    </main>
  )
}