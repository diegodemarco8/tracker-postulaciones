import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [postulaciones, setPostulaciones] = useState(() => {
  const guardadas = localStorage.getItem('postulaciones')
  return guardadas ? JSON.parse(guardadas) : []
  })

  const [fecha, setFecha] = useState('')
  const [puesto, setPuesto] = useState('')
  const [horas, setHoras] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [estado, setEstado] = useState('Enviada')

  useEffect(() => {
  localStorage.setItem('postulaciones', JSON.stringify(postulaciones))
  }, [postulaciones])

  function agregarPostulacion(e) {
    e.preventDefault()

    const nueva = { id: crypto.randomUUID(), fecha, puesto, horas, empresa, estado }
    setPostulaciones([...postulaciones, nueva])

    setFecha('')
    setPuesto('')
    setHoras('')
    setEmpresa('')
    setEstado('Enviada')
  }

  function eliminarPostulacion(id) {
    setPostulaciones(postulaciones.filter((p) => p.id !== id))
  }

  function cambiarEstado(id, nuevoEstado) {
    setPostulaciones(
    postulaciones.map((p) =>
      p.id === id ? { ...p, estado: nuevoEstado } : p)
    )
  }

  

  return (
    <div className="App">
      <h1>Ingresar postulación</h1>

        <form className="formulario" onSubmit={agregarPostulacion}>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        /><br/>
        <input
          type="text"
          placeholder="Puesto"
          value={puesto}
          onChange={(e) => setPuesto(e.target.value)}
          required
        /><br/>
        <input
          type="number"
          placeholder="Horas de trabajo"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
        /><br/>
        <input
          type="text"
          placeholder="Empresa"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          required
        /><br/>
        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option>Enviada</option>
          <option>En proceso</option>
          <option>Entrevista</option>
          <option>Rechazada</option>
          <option>Aceptada</option>
        </select><br/><br/>
        <button type="submit">Agregar</button>
      </form><br/>

      <p className="contador">Cantidad de postulaciones: {postulaciones.length}</p>

      <ul className="lista">
        {postulaciones.map((p) => (
           <li
            key={p.id}
            className={`tarjeta estado-${p.estado.toLowerCase().replace(' ', '-')}`}
           >
              <div>
                 <strong>{p.puesto}</strong> en {p.empresa}
                 <span className="detalle">
                    {p.fecha}
                    {p.horas && ` · ${p.horas} hs`}
                 </span>
              </div>
              <div className="tarjeta-acciones">
                 <select
                    value={p.estado}
                    onChange={(e) => cambiarEstado(p.id, e.target.value)}
                 >
                    <option>Enviada</option>
                    <option>En proceso</option>
                    <option>Entrevista</option>
                    <option>Rechazada</option>
                    <option>Aceptada</option>
                 </select>
                 <button className="eliminar" onClick={() => eliminarPostulacion(p.id)}>
                    Eliminar
                 </button>
              </div>
           </li>
        ))}
      </ul>
    </div>
  )
}

export default App

