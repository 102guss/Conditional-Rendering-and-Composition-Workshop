import { useState } from 'react'
import InputNumber from './InputNumber'
import Message from './Message'
import RestartButton from './RestartButton'
import './Game.css'
import miImagen from '../assets/mago.gif'
const Game = () => {
  const [intentos, setIntentos] = useState(0)
  const [numeroSecreto, setNumeroSecreto] = useState(generarNumero())
  const [input, setInput] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [juegoTerminado, setJuegoTerminado] = useState(false)

  function generarNumero () {
    return Math.floor(Math.random() * 100) + 1
  }

  const manejarCambio = (e) => {
    setInput(e.target.value)
  }

  const manejarEnvio = (e) => {
    e.preventDefault()
    const numero = parseInt(input)
    if (isNaN(numero)) {
      setMensaje('Por favor, introduce un número válido.')
      return
    }
    setIntentos(intentos + 1)
    if (numero === numeroSecreto) {
      setMensaje('¡Correcto!')
      setJuegoTerminado(true)
    } else if (numero < numeroSecreto) {
      setMensaje('El número es mayor.')
    } else {
      setMensaje('El número es menor.')
    }
  }

  const reiniciarJuego = () => {
    setNumeroSecreto(generarNumero())
    setInput('')
    setMensaje('')
    setJuegoTerminado(false)
    setIntentos(0) // Reiniciar intentos
  }

  return (
    <div className='game-container'>
      <h1> Adivina el número (1-100)</h1>
      <p>Intentos: {intentos}</p>
      <form onSubmit={manejarEnvio}>
        <InputNumber value={input} onChange={manejarCambio} disabled={juegoTerminado} />
        <button type='submit' disabled={juegoTerminado}>Adivinar</button>
      </form>
      <Message mensaje={mensaje} />
      {juegoTerminado && <RestartButton onClick={reiniciarJuego} />}
      <img src={miImagen} alt='mago' />
    </div>
  )
}

export default Game
