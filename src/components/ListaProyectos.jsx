import { useState } from 'react'
import {
  agregarProyecto,
  buscarProyecto,
  eliminarProyecto,
  obtenerProyectos,
} from '../services/proyectoService.js'

const estadoInicialFormulario = {
  titulo: '',
  categoria: '',
  estado: true,
}

function ListaProyectos() {
  const [proyectos, setProyectos] = useState(obtenerProyectos())
  const [busqueda, setBusqueda] = useState('')
  const [formulario, setFormulario] = useState(estadoInicialFormulario)

  console.log(proyectos)


  const actualizarListado = (texto = busqueda) => {
    setProyectos(texto ? buscarProyecto(texto) : obtenerProyectos())
  }

  const manejarBusqueda = (evento) => {
    const texto = evento.target.value
    setBusqueda(texto)
    actualizarListado(texto)
  }

  const manejarCambioFormulario = (evento) => {
    const { checked, name, type, value } = evento.target
    setFormulario({
      ...formulario,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const manejarAgregarProyecto = (evento) => {
    evento.preventDefault()

    if (!formulario.titulo.trim() || !formulario.categoria.trim()) {
      return
    }

    agregarProyecto({
      id: Date.now(),
      titulo: formulario.titulo.trim(),
      categoria: formulario.categoria.trim(),
      estado: formulario.estado,
    })

    setFormulario(estadoInicialFormulario)
    actualizarListado()
  }

  const manejarEliminarProyecto = (id) => {
    eliminarProyecto(id)
    actualizarListado()
  }

  return (
    <section className="proyectos" aria-labelledby="titulo-proyectos">
      <div className="proyectos__encabezado">
        <div>
          <p className="seccion-etiqueta">Panel de trabajo</p>
          <h2 id="titulo-proyectos">Lista de proyectos</h2>
        </div>
        <label className="buscador">
          <span>Buscar por título</span>
          <input
            type="search"
            placeholder="Ej: biblioteca"
            value={busqueda}
            onChange={manejarBusqueda}
          />
        </label>
      </div>

      <form className="formulario" onSubmit={manejarAgregarProyecto}>
        <label>
          <span>Título</span>
          <input
            type="text"
            name="titulo"
            value={formulario.titulo}
            onChange={manejarCambioFormulario}
            placeholder="Nombre del proyecto"
          />
        </label>

        <label>
          <span>Categoría</span>
          <input
            type="text"
            name="categoria"
            value={formulario.categoria}
            onChange={manejarCambioFormulario}
            placeholder="Área o materia"
          />
        </label>

        <label className="checkbox-campo">
          <input
            type="checkbox"
            name="estado"
            checked={formulario.estado}
            onChange={manejarCambioFormulario}
          />
          <span>Proyecto activo</span>
        </label>

        <button type="submit">Agregar proyecto</button>
      </form>

      <div className="proyectos__grilla">
        {proyectos.length > 0 ? (
          proyectos.map((proyecto) => (
            <article className="proyecto-card" key={proyecto.id}>
              <div>
                <p className="proyecto-card__categoria">{proyecto.categoria}</p>
                <h3>{proyecto.titulo}</h3>
              </div>
              <span className="proyecto-card__estado">
                {proyecto.estado ? 'Activo' : 'Inactivo'}
              </span>
              <button
                className="boton-secundario"
                type="button"
                onClick={() => manejarEliminarProyecto(proyecto.id)}
              >
                Eliminar
              </button>
            </article>
          ))
        ) : (
          <p className="sin-resultados">No se encontraron proyectos.</p>
        )}
      </div>
    </section>
  )
}

export default ListaProyectos