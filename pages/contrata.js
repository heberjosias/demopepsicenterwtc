import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import Title from '../components/ui/title';
import SubTitle from '../components/ui/subtitle';
import FormContrata from '../components/forms/formContrata';

const Intro = styled.section`
    width: 90vw;
    margin: 0 auto;
    padding: 1em 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2em;
    p{
        text-align: justify;
        @media (min-width: 1025px) {
            text-align: center;
        }  
    }
    @media (min-width: 1025px) {
        width: 70vw;
    }  
`;

const Destacados = styled.section`
    width: 90vw;
    margin: 0 auto;
    padding: 1em 0;
    text-align: center;    
    display: grid;    
    grid-template-columns: repeat(3,1fr);
    align-items: center;
    gap: 1em;    
    div{
        img{
            width: 5em;
            @media (min-width: 768px) {        
                width: 10em;
            } 
        }
        p{            
            font-weight: 600;
            font-size: 1em;
            @media (min-width: 768px) {        
                font-size: 1.4em;
            } 
        }
    }
    @media (min-width: 1025px) {        
        width: 80vw;
    } 
`;

const Form = styled.section`
    width: 90vw;
    margin: 1em auto;
    text-align: center;
    @media (min-width: 1025px) {        
        width: 70vw;
        margin: 1em auto 2em auto;
    }     
`;

const Contrata = () => {
    return (
        <> 
        <SEO Title="Contrata"/>
        <Layout>
            <Title 
                Text1="Contrata"
                Text2="PCWTC"
            />
            <SubTitle
                Text1="Nuestro Venu"
                LastLetter="e"
            />      
            <Intro>
                <div>
                    <p>Pepsi Center WTC es la mejor opción para tus eventos. Se caracteriza por ser un espacio multifuncional y versátil. El recinto  cuenta con distintas configuraciones que se adaptan  a las necesidades de cada promotor.</p>       
                    <p>Con una capacidad  de 3,342 personas en configuración auditorio y de 6, 486 hasta máximo  8,000 personas en configuración concierto, también  cuenta con su propio y muy completo Rider que lo hace idóneo para todos los géneros musicales.</p>             
                    <p>Además de estar ubicado en World Trade Center México y tener vías de transporte público que hacen muy fácil la llegada al recinto, cuenta con más de tres mil cajones de estacionamiento.</p>
                </div>
            </Intro>   
            <Destacados>
                <Fade cascade>
                    <div>
                        <img src="/icon/sustentable.svg"/>
                        <p>Recinto<br></br>sustentable</p>
                    </div>
                    <div>
                        <img src="/icon/visitor.svg"/>
                        <p>Espacio para<br></br>7,000 espectadores</p>
                    </div>
                    <div>
                        <img src="/icon/bebidas.svg"/>
                        <p>Centros de<br></br>consumo</p>
                    </div>    
                </Fade>
            </Destacados>
            <Form>
                <FormContrata/>
            </Form>
        </Layout>
        </>
     );
}
 
export default Contrata;