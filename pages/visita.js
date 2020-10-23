import React from 'react';
import styled from '@emotion/styled';
import Zoom from 'react-reveal/Zoom';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import MobileBack from '../components/ui/mobileBack';
import Title from '../components/ui/title';
import SubTitle from '../components/ui/subtitle';
import ImgModal from '../components/ui/imgModal';
import Faq from '../components/faqs/faq';
import CtaNewsletter from '../components/ui/ctaNewsletter';
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
    top: 50%;
    left: -5%;
    width: 180px;
    z-index: 1;            
    @media (max-width: 768px) {
        display: none;
    }
`;

const Llegada = styled.section`
    width: 90vw;
    margin: 0 auto;
    padding: 1em 0;
    display: grid;    
    gap: 1em;
    text-align: center;
    @media (min-width: 1025px) {
        padding: 2em 0;
        grid-template-columns: repeat(2,1fr);
        width: 95vw;
    }    
`;

const Transporte = styled.div`
    padding: 2em 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;
    text-align: center;
`;

const Icon = styled.div`
    cursor: pointer;
    padding: 1em;
    border-radius: 50%;
    transition: transform 2s;
    &:hover{
        background-image: linear-gradient(-260deg, rgba(4,27,49,.1) 32%, rgba(24,48,82,.4) 48%, rgba(4,27,49,.2) 80%);     
        transition: transform 2s;
        transform: scale(1.05);
    }      
    @media (min-width: 768px) {
        padding: 2em;
    }     
`;

const Section = styled.section`
    width: 90vw;
    margin: 0 auto;
    padding: 1em 0;
    @media (min-width: 1025px) {        
        margin: 0;
        width: 100vw;
        display: grid;        
        grid-template-columns: 30% 70%;
        align-items: center;
    }  
`;

const Hoteles = styled.section`
    section{
        text-align: center;
        padding: 1em 0;
        img{
            width: 5em;
            @media (min-width: 1025px) {        
                width: 10em;
            }              
        }
        p{            
            font-weight: 600;
            font-size: 1.4em;
        }
    }
`;

const Consumo = styled.div`
    text-align: center;
    padding: 1em 0;    
    section{
        padding: 1em 0;
        display: grid;    
        grid-template-columns: repeat(3,1fr);
        gap: 1em;    
    }
    div{
        img{
            width: 5em;
            @media (min-width: 1025px) {        
                width: 10em;
            }              
        }
        p{            
            font-weight: 600;
            font-size: 1.4em;
        }
        z-index: -1;
    }
    @media (min-width: 1025px) {        
        width: 70vw;
    }  
`;

const SectionNews = styled.section`
    margin: 0 auto;
    padding: 1em 0;
    text-align: center;    
    display: grid;   
    gap: 1em;
    @media (min-width: 1025px) {        
        width: 95vw;
        padding: 1em 0 2em 0;
        grid-template-columns: 60% 38%;
    }   
`;

const Dudas = styled.div`
    h3{
        color:#00d8ff;
        text-transform: uppercase;
    }
    h3, p{
        text-align: left;
    }
    @media (max-width: 1024px) {                
        padding: 0;
        margin:0;
        margin: 0 1em;
    }      
`;

const Visita = () => {   

    const faqs = [
        {
            key:'1',
            pregunta: '¿Cuáles son nuestros horarios de taquilla?',
            respuesta: 'De lunes a viernes de 09:00 a 20:00 hrs y sábados y domingo de 10:00 a 18:00 hrs',
        },
        {
            key:'2',
            pregunta: '¿Hay estacionamiento? ¿Cuál es el costo?',
            respuesta: 'Nuestro estacionamiento cuenta con 3,279 cajones y cuenta con accesos por las calles de Filadelfia, Dakota y Montecito. Para los conciertos realizados en nuestro recinto contamos con una tarifa preferencial única de $90 pesos, la cual puede ser pagada antes, durante o después del evento.',
        },
        {
            key:'3',
            pregunta: '¿Hay servicio de paquetería?',
            respuesta: 'Aún no contamos con servicio de paquetería',
        },
        {
            key:'4',
            pregunta: '¿Puedo ingresar al recinto con cámaras fotográficas y/o de video profesionales?',
            respuesta: 'Por disposición oficial no se permite el acceso al recinto con cámaras de bolsillo y/o cámaras profesionales.',
        }
    ];

    return (
        <> 
        <SEO Title="Visita" />
        <General>
            <MobileBack
                url="/img/pcwtcback.png"
            />                                  
            <Back src="/img/points.png" />            
            <CircleBack src="/img/circulo.svg" />  
            <Layout>
                <Title 
                    Text1="Planea"
                    Text2="Tu Visita"
                />
                <Llegada>
                    <div>
                        <SubTitle
                            Text1="¿Cómo llegar"
                            LastLetter="?"
                        />
                        <Transporte>
                            <Zoom cascade>
                                <Icon>
                                    <a href="https://www.google.com/maps/search/metro/@19.39507,-99.181984,15z?hl=es-419" target="blank">
                                        <img src="/icon/metro.svg" alt="Conciertos"/>
                                    </a>
                                </Icon>                          
                                <Icon>
                                    <a href="https://www.google.com/maps/search/metrobus/@19.395069,-99.179109,15z?hl=es-419" target="blank">
                                        <img src="/icon/metrobus.svg" alt="Conciertos"/>
                                    </a>
                                </Icon>  
                                <Icon>
                                    <a href="https://www.google.com/maps/search/ecobici/@19.392612,-99.181602,15z?hl=es-419" target="blank">
                                        <img src="/icon/bicicleta.svg" alt="Conciertos"/>
                                    </a>
                                </Icon>  
                            </Zoom>   
                        </Transporte>                                                         
                    </div>
                    <div>
                        <SubTitle
                            Text1="Estacionamient"
                            LastLetter="o"
                        />
                        <Zoom>
                            <ImgModal
                                url="/img/estacionamiento.png" 
                                alt="Estacionamiento PCWTC"
                                imgOpen="/img/estacionamientozoom.png"
                            />
                        </Zoom>
                    </div>                            
                </Llegada>
                <Section>
                    <Hoteles>
                        <SubTitle
                            Text1="Hotele"
                            LastLetter="s"
                        />
                        <section>
                            <div>
                                <a href="/docs/convenios.pdf" target="blank">
                                    <img src="/icon/hotel.svg"/>
                                    <p>Múltiples convenios</p>
                                </a>
                            </div>
                        </section>
                    </Hoteles>
                    <Consumo>   
                        <SubTitle
                            Text1="Centros de Consum"
                            LastLetter="o"
                        />
                        <section>                        
                            <Zoom cascade>
                                <div>
                                    <img src="/icon/alimentos.svg"/>
                                    <p>Alimentos</p>
                                </div>
                                <div>
                                    <img src="/icon/bebidas.svg"/>
                                    <p>Bebidas</p>
                                </div>
                                <div>
                                    <img src="/icon/snacks.svg"/>
                                    <p>Snacks</p>
                                </div>        
                            </Zoom>  
                        </section>                      
                    </Consumo>
                </Section>
                <SectionNews>
                    <Dudas>
                        <h3>Dudas Frecuentes</h3>
                        {faqs.map(element => (
                            <Faq 
                                key={element.key}
                                element={element}
                            />
                        ))}
                    </Dudas>
                    <div>
                        <CtaNewsletter/>
                    </div>
                </SectionNews>
            <Footer/>
            </Layout>
        </General>
        </>
     );
}
 
export default Visita;