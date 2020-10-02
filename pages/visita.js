import React from 'react';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import Title from '../components/ui/title';
import SubTitle from '../components/ui/subtitle';
import Faq from '../components/faqs/faq';
import CtaNewsletter from '../components/ui/ctaNewsletter';

const Llegada = styled.section`
    width: 90vw;
    margin: 0 auto;
    padding: 1em 0;
    display: grid;    
    gap: 1em;
    text-align: center;
    @media (min-width: 1025px) {
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
    background: rgb(69,166,222);
    background: -moz-radial-gradient(circle, rgba(69,166,222,0.8239670868347339) 0%, rgba(28,59,175,0.8911939775910365) 47%, rgba(28,59,175,0.8827906162464986) 72%, rgba(69,166,222,0.7763480392156863) 81%, rgba(56,27,167,1) 90%);
    background: -webkit-radial-gradient(circle, rgba(69,166,222,0.8239670868347339) 0%, rgba(28,59,175,0.8911939775910365) 47%, rgba(28,59,175,0.8827906162464986) 72%, rgba(69,166,222,0.7763480392156863) 81%, rgba(56,27,167,1) 90%);
    background: radial-gradient(circle, rgba(69,166,222,0.8239670868347339) 0%, rgba(28,59,175,0.8911939775910365) 47%, rgba(28,59,175,0.8827906162464986) 72%, rgba(69,166,222,0.7763480392156863) 81%, rgba(56,27,167,1) 90%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#45a6de",endColorstr="#381ba7",GradientType=1);
    box-shadow: 1px 1px 4px 2px rgba(0,0,0,.2);
    padding: 1em;
    border-radius: 50%;
    transition: transform .4s;
    &:hover{
        transition: transform .4s;
        transform: scale(1.04);
    }      
    @media (min-width: 768px) {
        padding: 2em;
    }     
`;

const Estacionamiento = styled.img`
    padding: 1em 0;
    @media (min-width: 768px) {
        transition: transform .4s;
        &:hover{
            transition: transform .4s;
            transform: scale(1.1);
        }
    }        
`;

const Consumo = styled.section`
    width: 90vw;
    margin: 0 auto;
    padding: 1em 0;
    text-align: center;    
    display: grid;    
    grid-template-columns: repeat(3,1fr);
    gap: 1em;    
    div{
        img{
            width: 10em;
        }
        p{            
            font-weight: 600;
            font-size: 1.4em;
        }
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
            pregunta: 'Cuáles son nuestros horarios de taquilla?',
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
                    </Transporte>                                                         
                </div>
                <div>
                    <SubTitle
                        Text1="Estacionamient"
                        LastLetter="o"
                    />
                    <Estacionamiento src="/img/estacionamiento.png" alt="Estacionamiento PCWTC"/>
                </div>                            
            </Llegada>
            <SubTitle
                Text1="Centros de Consum"
                LastLetter="o"
            />
            <Consumo>                
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
            </Consumo>
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
        </Layout>
        </>
     );
}
 
export default Visita;