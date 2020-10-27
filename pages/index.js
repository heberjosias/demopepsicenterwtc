import React from 'react';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import EventosPrincipal from '../components/eventos/eventosPrincipal';
import CarteletaPrincipal from '../components/eventos/carteleraPrincipal';
import SubTitle from '../components/ui/subtitle';
import Blog from '../components/blog/blog';
import CtaSpotify from '../components/ui/ctaSpotify';
import CtaNewsletter from '../components/ui/ctaNewsletter';
import Patrocinadores from '../components/ui/patrocinadores';
import FooterHome from '../components/layout/footerHome';

import useEventos from '../hooks/useEventos';

const General = styled.div`
    position:relative;
`;

const Back = styled.img`
    position: absolute; 
    top: 0;    
    height: 100%;  
    margin: 0 auto;
    z-index: -999;          
    @media (max-width: 1024px) {
        top: 0%;    
        height: auto;   
        background-repeat: repeat-y;
    }
`;

const CircleBack = styled.img`
    position: absolute; 
    top: 14%;
    right: 15%;
    width: 220px;
    z-index: -1;            
    @media (max-width: 768px) {
        display: none;
    }
`;

const Circle = styled.div`
    position: absolute; 
    top: 20%;
    right: 0%;
    height: 350px;    
    width: 350px;
    border: 1px solid #1f1f79;
    background-color: transparent;
    border-radius: 50%;
    z-index: -1;            
    @media (max-width: 768px) {
        display: none;
    }
`;

const CTA = styled.section`
  width: 95vw;
  margin: 2em auto 0 auto;
  display: grid;  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3em;
  }
`;

const Newsletter = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Home = () => {

  return ( 
    <>
      <SEO Title="Inicio"/>
      <General>
        <Back src="/img/points.png" />      
        <CircleBack src="/img/circulo.svg" />    
        <Circle/>
        <Layout>          
          <EventosPrincipal/>
          <CarteletaPrincipal/>
          <CTA>
            <CtaSpotify
              text1="Escucha a tus"
              text2="artistas favoritos"
            />
            <Newsletter>
              <CtaNewsletter/>        
            </Newsletter>        
          </CTA>
          <Patrocinadores/>
        <FooterHome/>
        </Layout>
      </General>
    </>
   );
}
 
export default Home;
