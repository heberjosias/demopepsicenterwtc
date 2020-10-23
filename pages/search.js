import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import Title from '../components/ui/title';
import CarteleraPrincipal  from '../components/eventos/carteleraPrincipal';
import Patrocinadores from '../components/ui/patrocinadores';
import Footer from '../components/layout/footer';

const General = styled.div`
    position:relative;
`;

const Back = styled.img`
    position: absolute; 
    top: 10%;    
    height: 100%;  
    margin: 0 auto;
    z-index: -999;          
    @media (max-width: 1024px) {
        top: 0%;    
        height: auto;   
        background-repeat: repeat-y;
    }
`;

const Search = () => {

  return ( 
    <>
      <SEO Title="Eventos"/>
      <General>
        <Back src="/img/points.png" />      
        <Layout>
          <Title 
              Text1="Nuestros"
              Text2="Eventos"
          />
          <CarteleraPrincipal/>
          <Patrocinadores/>
        <Footer/>
        </Layout>
      </General>
    </>
   );
}
 
export default Search;
