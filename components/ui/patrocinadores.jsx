import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

const Section = styled.section`
    width: 90vw;
    margin: 3em auto 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    text-align: center;
    img{
        margin: 0 auto;
        box-shadow: 1px 1px 4px 2px rgba(0,0,0,.4);
    }    
    @media (min-width: 767px) {
        width: 95vw;
        gap: 4em;
    }    
    @media (min-width: 1024px) {
        margin: 3em auto 2em auto;
        width: 95vw;
        grid-template-columns: repeat(4, 1fr);
        gap: 3em;
    }
`;

const Patrocinador = styled.div`
    background-color: #40adf8;
    height: 140px;
`;

const Patrocinadores = () => {
    return (         
        <Section>
            <Fade cascade >
                <img src="/img/doritos.jpg"/>
                <img src="/img/patrocinador.jpg"/>
                <img src="/img/patrocinador.jpg"/>
                <img src="/img/patrocinador.jpg"/>                 
            </Fade>
        </Section>
     );
}
 
export default Patrocinadores;