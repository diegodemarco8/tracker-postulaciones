# Tracker de Postulaciones

Aplicación web para llevar el registro de postulaciones laborales: en qué puestos y empresas me postulé, cuándo, y en qué estado está cada una. Nació de una necesidad propia durante mi búsqueda de trabajo en IT.

## Funcionalidades

- Agregar una postulación con fecha, puesto, horas de trabajo, empresa y estado.
- Ver la lista de postulaciones cargadas y el total.
- Cambiar el estado de una postulación (Enviada, En proceso, Entrevista, Rechazada, Aceptada).
- Eliminar postulaciones.
- Los datos se guardan en el navegador (`localStorage`), así que no se pierden al recargar la página.

## Tecnologías

- [React](https://react.dev/) (hooks: `useState`, `useEffect`)
- [Vite](https://vite.dev/)
- JavaScript, HTML y CSS
- ESLint

## Cómo correrlo en local

Requiere [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/diego-demarco/tracker-postulaciones.git
cd tracker-postulaciones
npm install
npm run dev
```

Después abrí la URL que muestra la terminal (normalmente `http://localhost:5173`).

## Decisiones técnicas

- **Estado con `useState`:** la lista de postulaciones y cada campo del formulario se manejan como estado de React (formulario controlado).
- **Persistencia con `localStorage`:** elegí guardar en el navegador para mantener la primera versión simple y sin backend. La limitación es que los datos quedan en ese navegador y en esa computadora.
- **Identificadores con `crypto.randomUUID()`:** cada postulación tiene un id único. En una versión con backend, ese id lo asignaría la base de datos.
- **Actualizaciones inmutables:** para agregar, eliminar y cambiar el estado uso `filter`, `map` y el operador spread en lugar de modificar la lista original.

## Próximas mejoras

- Editar todos los datos de una postulación, no solo el estado.
- Buscar y filtrar por fecha, puesto, empresa o estado.
- Backend con base de datos para acceder a los datos desde cualquier dispositivo.

## Autor

Proyecto personal de práctica desarrollado como parte de mi formación en Analista en Tecnologías de la Información (Universidad ORT, Uruguay).
