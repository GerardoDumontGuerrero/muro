import React, {useState} from 'react';

// Crea un objeto de tipo mensaje para anadirlo a la lista
const crearMensaje = mensaje => ({mensaje, leido: false});

/* Recibe el evento compartido entre padre e hijo para redibujar
cuando cambie una propiedad o el estado del componente */
const Mensaje = ({onAddMensaje}) => {

    return (
        <div>
            <label>        
                {/* Cuando hagamos click sobre el botón 
                desencadenaremos el evento onAddMensaje, 
                pasándole como argumento el texto del mensaje 
                que queremos añadir a la lista. El evento llegará 
                al padre (App) que se encargará de actualizar la lista
                de mensajes y renderizar todo el componente 
                */}        
                <input type='text' id='mensaje' placeholder='introduce tu mensaje'/>
                <input type='button' value='Añadir' 
                    onClick={ (e) => onAddMensaje(crearMensaje(document.getElementById('mensaje').value))}/>                    
            </label>
        </div>
    );
};

export default Mensaje;