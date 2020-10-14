import React from 'react';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import Title from '../components/ui/title';
import CarteleraDesktop from '../components/eventos/carteleraDesktop';
import CarteleraPrincipal  from '../components/eventos/carteleraPrincipal';
import Patrocinadores from '../components/ui/patrocinadores';

const General = styled.div`
    position:relative;
`;

const Back = styled.img`
    position: absolute; 
    top: 5%;    
    left: 2%;
    width: 95%;  
    margin: 0 auto;
    z-index: -999;          
    @media (max-width: 768px) {
        display: none;
    }
`;

const Circle = styled.img`
    position: absolute; 
    top: 14%;
    left: 10%;
    z-index: 10;            
    @media (max-width: 768px) {
        display: none;
    }
`;

const Circle2 = styled.img`
    position: absolute; 
    top: 10%;
    right: 14%;
    z-index: 10;            
    width: 60px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const CircleBack = styled.img`
    position: absolute; 
    top: 12%;
    right: 0%;
    width: 180px;
    z-index: 1;            
    @media (max-width: 768px) {
        display: none;
    }
`;

const Section = styled.div`
    margin: 2em 0;
`;

const Newletter = styled.section`
    margin: 2em auto;
    @media (min-width: 768px) {
        width: 60vw;
    }
    @media (min-width: 1025px) {
        width: 40vw;
    }
`;

const Cartelera = () => {
    return ( 
        <>
            <SEO Title="Cartelera"/>
            <General>   
                <Back src="/img/pointsnews.png" />      
                <Circle src="/img/circle.png" />       
                <Circle2 src="/img/circle.png" />       
                <CircleBack src="/img/circulo.svg" />    
                <Layout>                    
                    <Title 
                        Text1="Tus Eventos"
                        Text2="Favoritos"
                    />
                    <CarteleraDesktop/>
                    <CarteleraPrincipal/>
                    <Patrocinadores/>
                </Layout>
            </General>
        </>        
     );
}
 
export default Cartelera;