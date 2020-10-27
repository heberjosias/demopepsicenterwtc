import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import MobileBack from '../components/ui/mobileBack';
import Title from '../components/ui/title';
import SubTitle from '../components/ui/subtitle';
import Imagen from '../components/ui/imagen';
import FormContrata from '../components/forms/formContrata';
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
        top: 15%;    
        height: auto;   
        background-repeat: repeat-y;
    }
`;

const CircleBack = styled.img`
    position: absolute; 
    top: 12%;
    right: 0%;
    width: 180px;
    z-index: 1;            
    @media (max-width: 768px) {
        display: none;
    }
`;

const CircleBack2 = styled.img`
    position: absolute; 
    bottom: 50%;
    left: -5%;
    z-index: 1;            
    width: 180px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const Intro = styled.section`
    width: 90vw;
    margin: 0 auto;
    padding: 2em 0 0 0;
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    p{        
        text-align: left;
        span{
            color:#00d8ff;
            font-weight: 600;
        }
    }
    @media (min-width: 1024px) {   
        padding: 3em 0;
        width: 80%;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        column-gap: 3em;
    }  
    @media (max-width: 1024px) {   
        width: 90vw;
        column-gap: 2em;
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
        width: 80%;
    } 
`;

const Form = styled.section`
    width: 90vw;
    margin: 1em auto;
    text-align: center;
    @media (min-width: 1024px) {        
        width: 80%;
        margin: 1em auto 2em auto;
    }     
`;

const Contrata = () => {
    return (
        <> 
        <SEO Title="Contrata"/>
        <General>
            <MobileBack
                url="/img/pcwtcback.png"
            />                      
            <Back src="/img/points.png" />            
            <CircleBack src="/img/circulo.svg" />  
            <CircleBack2 src="/img/circulo.svg" />   
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
                    <Fade>
                        <Imagen
                            url="/img/contrata1.jpg"
                            alt="Contrata PCWTC"
                        />
                    </Fade> 
                    <div>
                        <p>Pepsi Center WTC es la mejor opción para tus eventos. Se caracteriza por ser un espacio <span>multifuncional y versátil</span>. El recinto cuenta con <span>distintas configuraciones</span> que se adaptan a las necesidades de cada promotor.</p>
                        <p>Con una capacidad de <span>3,342</span> personas en configuración auditorio y de <span>6,486</span> hasta máximo <span>8,000</span> personas en configuración concierto, también  cuenta con su propio y muy completo Rider que lo hace idóneo para <span>todos los géneros musicales</span>.</p>             
                        <p>Además de estar ubicado en <span>World Trade Center México</span> y tener vías de transporte público que hacen muy fácil la llegada al recinto, cuenta con más de tres mil cajones de estacionamiento.</p>
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
                            <p>Espacio para<br></br>8,000 espectadores</p>
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
            <Footer/>
            </Layout>
        </General>
        </>
     );
}
 
export default Contrata;