import React from 'react';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import Title from '../components/ui/title';
import SubTitle from '../components/ui/subtitle';
import FormNewsletter from '../components/forms/formNewsletter';

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
            <Layout>
                <Title 
                    Text1="Suscríbete"
                    Text2="Newsletter"
                />
                <SubTitle
                    Text1="Confirmación Evento"
                    LastLetter="s"
                /> 
                <SubTitle
                    Text1="y preventas especiale"
                    LastLetter="s"
                />      
                <Datos>
                    <FormNewsletter/>
                </Datos>           
            </Layout>
        </>
      );
}

 
export default Newsletter;