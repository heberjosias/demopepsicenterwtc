import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import Title from '../components/ui/title';
import CarteleraPrincipal  from '../components/eventos/carteleraPrincipal';
import Patrocinadores from '../components/ui/patrocinadores';

const Search = () => {

  return ( 
    <>
      <SEO Title="Eventos"/>
      <Layout>
        <Title 
            Text1="Nuestros"
            Text2="Eventos"
        />
        <CarteleraPrincipal/>
        <Patrocinadores/>
      </Layout>
    </>
   );
}
 
export default Search;
