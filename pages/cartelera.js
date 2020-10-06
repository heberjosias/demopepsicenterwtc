import React from 'react';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import Title from '../components/ui/title';
import SubTitle from '../components/ui/subtitle';
import CarteleraDesktop from '../components/eventos/carteleraDesktop';
import CarteleraPrincipal  from '../components/eventos/carteleraPrincipal';
import Blog from '../components/blog/blog';
import CtaSpotify from '../components/ui/ctaSpotify';
import CtaNewsletter from '../components/ui/ctaNewsletter';

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
            <Layout>
                <Title 
                    Text1="Tus Eventos"
                    Text2="Favoritos"
                />
                <CarteleraDesktop/>
                <CarteleraPrincipal/>
                <SubTitle
                    Text1="Lo más destacad"
                    LastLetter="o"
                />
                <Section>
                    <Blog/>
                </Section>
            </Layout>
        </>        
     );
}
 
export default Cartelera;