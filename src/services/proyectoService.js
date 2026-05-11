const proyectoService = (() => {
  let proyectos = [
    {
      id: 1,
      titulo: 'Biblioteca digital escolar',
      categoria: 'Tecnologia',
      estado: true,
    },
    {
      id: 2,
      titulo: 'Huerta educativa comunitaria',
      categoria: 'Ambiente',
      estado: false,
    },
    {
      id: 3,
      titulo: 'Taller de lectura creativa',
      categoria: 'Lengua',
      estado: true,
    },
    {
      id: 4,
      titulo: 'Laboratorio de ciencias móviles',
      categoria: 'Ciencias',
      estado: true,
    },
    {
      id: 5,
      titulo: 'Muestra de arte interdisciplinaria',
      categoria: 'Arte',
      estado: false,
    },
  ]

  const obtenerProyectos = () => [...proyectos]
  const agregarProyecto = (proyecto) => {
    proyectos = [...proyectos, proyecto]
    return proyecto
  }

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter((proyecto) => proyecto.id !== id)
  }

  const buscarProyecto = (texto) => {
    const busqueda = texto.trim().toLowerCase()

    if (!busqueda) {
      return obtenerProyectos()
    }

    return proyectos.filter((proyecto) =>
      proyecto.titulo.toLowerCase().includes(busqueda),
    )
  }

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto,
  }
})()

export const obtenerProyectos = proyectoService.obtenerProyectos
export const agregarProyecto = proyectoService.agregarProyecto
export const eliminarProyecto = proyectoService.eliminarProyecto
export const buscarProyecto = proyectoService.buscarProyecto