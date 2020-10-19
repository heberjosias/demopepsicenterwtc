import React from 'react';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import MobileBack from '../components/ui/mobileBack';
import Title from '../components/ui/title';
import CarteleraDesktop from '../components/eventos/carteleraDesktop';
import CarteleraPrincipal  from '../components/eventos/carteleraPrincipal';
import Patrocinadores from '../components/ui/patrocinadores';

const General = styled.div`
    position:relative;
`;

const Back = styled.img`
    position: absolute; 
    left: 5%;
    top: 0;    
    height: 100%;  
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


const Cartelera = () => {
    return ( 
        <>
            <SEO Title="Cartelera"/>
            <General>   
                <MobileBack
                    url="/img/pcwtcback.png"
                />
                <Back src="/img/points.png" />      
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