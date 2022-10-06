import React from 'react';

const ListaMensajes = ({listamensajes}) => {
   
        const alerta = () => {
            alert({listamensajes});
        }
        
        return (
        <ul>            
            { listamensajes.map(({mensaje,leido}, i) => ( <li key={i}>{mensaje}</li>))}
        </ul>
        );

    
};

export default ListaMensajes;