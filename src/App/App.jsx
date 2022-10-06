import React, { useState } from 'react';
import Mensaje from './Mensaje';
import ListaMensajes from './ListaMensajes';
import Rotulo from './Rotulo';
import PropTypes from 'prop-types';
import './App.css';


// Recibimos desde App el objeto user y la lista de mensajes
// Pero podríamos definir esos objetos aquí mismo. En ese caso no recogeriamos las propiedades

// const user = { nombre: 'pepe', apellidos: 'lopez'}

/*const listamensajes = [
    {mensaje : 'Hola', leido: true},
    {mensaje : 'Adios', leido: false},
]*/
    
// Recogemos las propiedades que le hemos pasado desde del punto de entrada index.jsx
const App = (props) => {    

    // Cuando cambia la lista se renderiza toda la aplicación
    const [{listamensajes}, addMensaje] = useState(props.listamensajes);

    console.log(props.user);
    // Este sería el código html la aplicación escrito en jsx
    return (        
        <div>
            {/* El rótulo es la cabecera del muro */}
            <Rotulo user={props.user} />
            {/* 
                El mensaje representa el campo de texto y el botón para 
                añadir comentarios al muro 
            */}
            {/* 
                Cuando hagamos click en el botón Añadir el evento subirá hasta aquí 
                y añadiremos el comentario (mensaje) a la lista de mensajes 
                onAddMensaje es un evento creado por nosotros que se dispara dentro
                del componente 
            */}
            <Mensaje                 
                onAddMensaje={ msj => {                        
                    addMensaje(props.listamensajes.push(msj));                    
                }}                
            />            
            {/* Representa la lista de mensajes que debe ser renderizada 
                cada vez que  */}
            <ListaMensajes listamensajes={props.listamensajes}/>
        </div>
    );
};

// Controlamos el tipo de las propiedades y sus valores por defecto
App.propTypes = {
    msj: PropTypes.object,
    listamensajes: PropTypes.arrayOf(PropTypes.shape(Mensaje.propTypes)),
    onAddMensaje: PropTypes.func,
};
  
App.defaultProps = {
    listamensajes: [],
    onAddMensaje: () => {},
};
  

export default App;

