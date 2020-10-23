import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import MobileBack from '../components/ui/mobileBack';
import Title from '../components/ui/title';
import SubTitle from '../components/ui/subtitle';
import FormNewsletter from '../components/forms/formNewsletter';
import Footer from '../components/layout/footer';

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
        top: 20%;    
        height: auto;   
        background-repeat: repeat;
        background-size: auto;
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
    top: 14%;
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
    z-index: 1;            
    width: 180px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const CircleBack2 = styled.img`
    position: absolute; 
    bottom: 32%;
    left: -5%;
    z-index: 1;            
    width: 180px;
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
                <MobileBack
                    url="/img/pcwtcback.png"
                />
                <Back src="/img/pointsnews.png" />       
                <Circle src="/img/circle.png" />       
                <Circle2 src="/img/circle.png" />       
                <CircleBack src="/img/circulo.svg" />
                <CircleBack2 src="/img/circulo.svg" />        
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
                <Footer/>         
                </Layout>
            </General>
        </>
      );
}

 
export default Newsletter;