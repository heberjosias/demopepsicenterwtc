import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import Title from '../components/ui/title';
import SubTitle from '../components/ui/subtitle';
import FormNewsletter from '../components/forms/formNewsletter';

const General = styled.div`
    position:relative;
`;

const Circle = styled.img`
    position: absolute; 
    top: 16%;
    left: 10%;
    z-index: 10;            
    @media (max-width: 768px) {
        display: none;
    }
`;

const Datos = styled.section`
    width: 90vw;
    margin: 3em auto 2em auto;
    @media (min-width: 1024px) {
        margin: 3em auto 3em auto;
        width: 50vw;
    }  
`; 

const Newsletter = () => {
    return (
        <>
            <SEO Title="Newsletter"/>
            <General> 
            <Circle src="/img/circle.png" />     
                <Layout>
                    <Title 
                        Text1="Suscríbete"
                        Text2="Newsletter"
                    />
                    <SubTitle
                        Text1="Recibe informació"
                        LastLetter="n"
                    /> 
                    <SubTitle
                        Text1="de nuestros concierto"
                        LastLetter="s"
                    />      
                    <Datos>
                        <FormNewsletter/>
                    </Datos>           
                </Layout>
            </General>
        </>
      );
}

 
export default Newsletter;