import React from 'react';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import Title from '../components/ui/title';
import SubTitle from '../components/ui/subtitle';
import FormPrensa from '../components/forms/formPrensa';

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
        </>
      );
}

 
export default Prensa;