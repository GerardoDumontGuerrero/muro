import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';

// Creamos un objeto user con 2 propiedades
const user = { nombre: 'Pepe', apellidos: 'Lopez'}

// Creamos una lista de mensajes
let listamensajes = [
    {mensaje : 'Hola', leido: true},
    {mensaje : 'Adios', leido: false},
]

// Seleccionamos el elemento padre desde el que va a colgar toda la aplicación
const root = ReactDOM.createRoot(
    document.getElementById('root')
);


// Le pasamos las propiedades al componente App
root.render(<App user={user} listamensajes={listamensajes}/>);
