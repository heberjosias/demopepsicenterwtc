import React from 'react';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import MobileBack from '../components/ui/mobileBack';
import Title from '../components/ui/title';
import SubTitle from '../components/ui/subtitle';
import FormPrensa from '../components/forms/formPrensa';

const General = styled.div`
    position:relative;
`;

const Back = styled.img`
    position: absolute; 
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
    top: 20%;
    left: 5%;
    z-index: 10;            
    @media (max-width: 768px) {
        display: none;
    }
`;

const Circle2 = styled.img`
    position: absolute; 
    top: 15%;
    right: 10%;
    z-index: 10;            
    width: 60px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const CircleBack = styled.img`
    position: absolute; 
    top: 20%;
    right: 0%;
    z-index: -999;            
    width: 180px;
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
            <MobileBack
                url="/img/pcwtcback.png"
            />                      
            <Back src="/img/points.png" />           
            <Circle src="/img/circle.png" />       
            <Circle2 src="/img/circle.png" />       
            <CircleBack src="/img/circulo.svg" />
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