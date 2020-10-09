import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

const Section = styled.section`
    width: 90vw;
    margin: 3em auto 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    @media (min-width: 767px) {
        gap: 2em;
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
                <img src="/img/patrocinador.jpg"/>
                <img src="/img/patrocinador.jpg"/>
                <img src="/img/patrocinador.jpg"/>
                <img src="/img/patrocinador.jpg"/>                 
            </Fade>
        </Section>
     );
}
 
export default Patrocinadores;