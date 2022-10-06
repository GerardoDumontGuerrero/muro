import React from 'react';
import PropTypes from 'prop-types';

const Rotulo = ({user}) => {

    return (
        <div>
            <h3>Muro de {user.nombre} {user.apellidos}</h3>
        </div>
    );
};

/*Rotulo.propTypes = {
    nombre: PropTypes.string,
    apellidos: PropTypes.string
};*/


export default Rotulo;