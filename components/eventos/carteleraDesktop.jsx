import React from 'react';
import styled from '@emotion/styled';

import DesktopPreview from '../eventos/desktopPreview';
import useEventos from '../../hooks/useEventos';

const Section = styled.section`
    width: 95vw;
    margin: 2em auto 4em auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 3em;
    text-align: center;
    @media (max-width: 768px) {
       display: none;
    } 
`;

const Meses = styled.div`
    display:flex;
    justify-content: center;    
    align-items:center;
    gap: 2em;
    margin: 2% 0;
    p{
        font-size: 1.2em;
        font-style: italic;
        font-weight: 600;
        border: 1px solid transparent;
        border-radius:5px;
        :hover{
            color: #ff0060;
            font-weight: 600;
            border: 1px solid #ff0060;
            border-radius:5px;
        }
        &.active {
        border: 2px solid #059cee;
        border-radius: 10px;
        font-weight: 800;
        font-style: italic;        
    }
    }
    @media (max-width: 768px) {
        display: none;
    }    
`;

const CarteleraDesktop = () => {
    
    const {eventos} = useEventos('conteo');

    return ( 
        <>            
        <Meses>   
            <p>Todos los meses</p>         
            <p>Diciembre</p>
            <p>Mayo</p>
            <p>Junio</p>
        </Meses>
        <Section>
            { eventos.map(evento => (
                <DesktopPreview
                    key={evento.id}
                    data={evento}
                />
            ))}
        </Section>
        </>
     );
}
 
export default CarteleraDesktop;