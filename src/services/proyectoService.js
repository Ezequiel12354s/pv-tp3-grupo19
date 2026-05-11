const proyectoService = (() => {
  let proyectos = [
    {
      id: 1,
      titulo: 'Simulacion Entrevista Laboral',
      categoria: 'Ingles 3',
      estado: true,
    },
    {
      id: 2,
      titulo: 'Gestion de Proyectos Educativos',
      categoria: 'Programacion Visual',
      estado: false,
    },
    {
      id: 3,
      titulo: 'Diseño de Base de Datos para un Hospital',
      categoria: 'Base de Datos 2',
      estado: true,
    },
    {
      id: 4,
      titulo: 'Resolución de Sistemas de Ecuaciones por Método de Gauss',
      categoria: 'Algebra 1',
      estado: true,
    },
    {
      id: 5,
      titulo: 'Administración de Usuarios y Permisos en Linux',
      categoria: 'Laboratorio de Sistemas Operativos 2',
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