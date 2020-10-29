import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';

import PrincipalPreview from '../eventos/principalPreview';
import useEventos from '../../hooks/useEventos';

const Section = styled.section`
    width: 90vw;
    margin: 1em auto 2em auto; 
    @media (min-width: 768px) {
        width: 95vw;
        margin: 1em auto 3em auto; 
    }      
`;

const Carrousel = styled.div`
    margin: 0;    
    padding: 0;
    overflow: hidden;
    ul{
        display: flex;
        width: 400%;
        margin: 0;
        padding: 0;
        list-style-type: none;

        animation: cambio 25s infinite;     
        animation-timing-function: ease-in;   
        li{
            width: 100%;
            list-style: none;
        }
    }
    @keyframes cambio {
        0% {margin-left: 0;}
        20% {margin-left: 0;}
        
        25% {margin-left: -100%;}
        50% {margin-left: -100%;}

        55% {margin-left: -200%;}
        70% {margin-left: -200%;}

        75% {margin-left: -300%;}
        100% {margin-left: -300%;}

    }
`;

const EventosPrincipal = () => {

    const {eventos} = useEventos('creado');
    //console.log(eventos);

    return ( 
        <Section> 
            <Carrousel>
                <ul>
                    { eventos.map(evento => (
                        <li>
                            <PrincipalPreview
                                key={evento.id}
                                data={evento}
                            />
                        </li>
                    ))}
                </ul>
            </Carrousel>
        </Section>
     );
}
 
export default EventosPrincipal;