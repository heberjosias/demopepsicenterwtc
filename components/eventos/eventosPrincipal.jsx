import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';

import PrincipalPreview from '../eventos/principalPreview';
import useEventos from '../../hooks/useEventos';

const Section = styled.section`
    width: 90vw;
    margin: 1em auto 2em auto; 
    @media (min-width: 768px) {
        width: 95vw;
        margin: 2em auto 3em auto; 
    }      
`;

const EventosPrincipal = () => {

    const {eventos} = useEventos('creado');
    //console.log(eventos);

    return ( 
        <Section> 
            { eventos.map(evento => (
                <PrincipalPreview
                    key={evento.id}
                    data={evento}
                />
            ))}
        </Section>
     );
}
 
export default EventosPrincipal;