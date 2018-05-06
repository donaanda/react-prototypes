import React from 'react';
import spiderman from './images/Spectacular_spiderman_2.jpg';
import BlackSuit from './images/blackSuit.jpg';
import Electro from './images/electro.jpg';
import GreenGoblin from './images/GreenGoblin.jpg';
import Venom from './images/venom.jpg';

export default [
    {
        src: spiderman,
        style: {
            left: '5%',
            transform: 'rotate(-10deg)'
        }
    },
    {
        src: BlackSuit,
        style: {
            right: '15%',
            transform: 'rotate(-9deg)'
        }
    },
    {
        src: Electro,
        style: {
            left: '37%',
            top: '25%',
            transform: 'rotate(-12deg)'
        }
    },
    {
        src: GreenGoblin,
        style: {
            left: '25%',
            top: '48%',
            transform: 'rotate(-5deg)'
        }
    },
    {
        src: Venom,
        style: {
            right: '25%',
            top: '52%',
            transform: 'rotate(16deg)'
        }
    },
];