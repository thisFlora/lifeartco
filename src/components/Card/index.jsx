import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const Card = ({ service }) => {
    return (
        <div class='card'>
            <div class='card-header'>
                <div className='card-icons'>
                    <FontAwesomeIcon icon={faUmbrella} className='icon' />
                </div>
                <h1>{service.name}</h1>
            </div>
            <div class='card-body'>
                <p>{service.description}</p>
                {/* <a href='#' class='btn'>
                    Más información
                </a> */}
            </div>
        </div>
    );
};

export default Card;
