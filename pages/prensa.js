import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import Title from '../components/ui/title';
import SubTitle from '../components/ui/subtitle';
import FormPrensa from '../components/forms/formPrensa';

const General = styled.div`
    position:relative;
`;

const Circle = styled.img`
    position: absolute; 
    top: 15%;
    left: 10%;
    z-index: 10;            
    @media (max-width: 768px) {
        display: none;
    }
`;

const Datos = styled.section`
    width: 90vw;
    margin: 4em auto 3em auto;
    @media (min-width: 1024px) {
        width: 95vw;
    }  
`; 

const Prensa = () => {
    return (
        <>
            <SEO Title="Prensa"/>            
            <General> 
            <Circle src="/img/circle.png" />     
                <Layout>
                    <Title 
                        Text1="Registro"
                        Text2="de Prensa"
                    />
                    <SubTitle
                        Text1="El registro no garantiz"
                        LastLetter="a"
                    /> 
                    <SubTitle
                        Text1="La acreditación al event"
                        LastLetter="o"
                    />      
                    <Datos>
                        <FormPrensa/>
                    </Datos>           
                </Layout>
            </General>
        </>
      );
}

 
export default Prensa;