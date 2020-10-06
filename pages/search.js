import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
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

import useEventos from '../hooks/useEventos';

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

const Search = () => {

  return ( 
    <>
      <SEO Title="Inicio"/>
      <Layout>
        <EventosPrincipal/>
        <CarteletaPrincipal/>
        <SubTitle
            Text1="Lo más destacad"
            LastLetter="o"
        />
        <Blog/>
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
      </Layout>
    </>
   );
}
 
export default Search;
