import React, { useEffect, useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';
import Router, {useRouter} from 'next/router';

import SEO from '../../components/layout/seo';
import Layout from '../../components/layout/layout';
import TitleEvento from '../../components/ui/titleEvento';
import {Btn} from '../../components/ui/btn'
import Faq from '../../components/faqs/faq';
import CtaNewsletter from '../../components/ui/ctaNewsletter';

import { FirebaseContext } from '../../firebase';

const Section = styled.section`
    width: 90vw;
    margin: 0 auto;
    @media (min-width: 768px) {            
        width: 95vw;
    }
`;

const HeroMobile = styled.div`
    margin: 0 0 2em 0; 
    text-align: center;
    p{
        text-align: justify;
    }
    @media (min-width: 1023px) {            
        display:none; 
    }
`;

const HeroDesktop = styled.div`
    background-color: rgba(1,20,97,.7);
    box-shadow: 1px 1px 4px 2px rgba(0,0,0,.3);
    border-radius:1px;
    padding: 1em 1em 1em;
    margin: 1em 0 2em 0;
    display:grid;
    grid-template-columns: 35% 65%;
    align-items:center;
    h2{
        margin:0;
        padding:0;
        color: #ff0062;
        font-size: 3rem;
        line-height:2.5rem;
        text-shadow: 2px 3px 4px rgba(0,0,0,.3);
    }
    h3{
        margin:0;
        padding:0;
        color: #00d8ff;
        font-size: 2rem;        
        font-weight: 500;
    }
    p{
        padding: 0 2em 0 0;
        font-size:14px;
        text-align:justify;
    }
    @media (max-width: 1023px) {            
        display:none; 
    }
`;


const Counter = styled.div`
    background-image: linear-gradient(-260deg, rgba(4,27,49,1) 32%, rgba(24,48,82,1) 48%, rgba(4,27,49,1) 60%);
    margin:5% -4% 5% -5%;
    padding:0;
    display:flex;
    justify-content: space-center;
    align-items:center;
    h4{
        padding:0;
        margin:0;
        color: #00d8ff;
        font-size: 1.2rem;         
    }
    @media (min-width: 768px) {   
        justify-content: space-between;         
        margin: 0;
        padding: 0 1em;
        h4{
            font-size: 1.5rem;  
        }
    }    
`;

const CounterMobile = styled.div`
    background-image: linear-gradient(-260deg, rgba(4,27,49,1) 32%, rgba(24,48,82,1) 48%, rgba(4,27,49,1) 60%);
    padding:0;
    display: grid;
    gap: 1em;
    h4{
        padding: .5em 0 0 0;
        margin:0;
        color: #00d8ff;
        font-size: 1.2em;         
    }
`;

const Configuracion = styled.div`
    padding: 2% 0 0 0 ;
    margin:0;
    justify-content:center;
    text-align:center;
    h2{        
        @media (min-width: 768px) {            
            display:none;
        } 
    }
    h3{
        text-align:left;
        margin:5% 0 2% 0;
        @media (min-width: 768px) {            
            margin: 5% 0 1% 17%;
            font-size: 2rem;
        }
    }
`;

const ConfiguracionImg = styled.img`
    width: 99%;
    @media (min-width: 768px) {            
        width: 60%;
        margin: 0 auto;
    }  
    transition: transform 1s;
    &:hover{
        transition: transform 1s;
        transform: scale(1.1);
        @media (max-width: 768px) {            
            transform: scale(1.05);
        }          
    }        
`;


const ConfiguracionText = styled.div`
    @media (min-width: 1024px) {            
        display: flex;
        justify-content: center;
        align-items: center;
    }  
`;

const Costos = styled.div`
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    align-items:center;
    column-gap: 1em;
    margin: 0 0 0 18%;
    h4{
        text-align:right;
        margin:0;
        padding:0;
        font-weight:500; 
    }
    p{  
        text-align:left;
        margin:0;
        padding:0;
        font-weight:700;
        color: #00d8ff;
    }
    @media (min-width: 768px) {            
        margin: 0;
        font-size: 1.1rem;
    }  
`;

const Adicionales = styled.div`
    margin: 1em 0;
    text-align: center;
`;

const Compartir = styled.div`
    img{
        margin: 1em;
        width: 3em;
        border-radius: 4px;
        transition: transform .5s;
        &:hover{
            transition: transform .5s;
            transform: scale(1.07);
        }     
    }
    @media (min-width: 768px) {            
        margin: 0 0 0 4em;    
    } 
`;


const SectionNews = styled.section`
    margin: 2em auto 0  auto;
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

const Evento = () => {

    const [nota, guardarNota] = useState({});
    const [error, guardarError] = useState(false);
    const [consultarDB, guardarConsultarDB ] = useState(true);

    //Routing para obtener Slug
    const router = useRouter();
    const {query : {id}} = router;
    //console.log(slug);

    // context de firebase
    const { firebase } = useContext(FirebaseContext);        

    useEffect(() => {
      if(id && consultarDB) {
          const obtenerNota = async () => {
              const notaQuery = await firebase.db.collection('eventos').doc(id);
              const nota = await notaQuery.get();
              console.log(nota.data());
              if(nota.exists) {
                  guardarNota( nota.data() );
                 guardarConsultarDB(false);
              } else {
                  guardarError(true);
                  guardarConsultarDB(false);
              }
          }
          obtenerNota();
      }
    }, [id, nota]);
    //console.log(nota);

    const { name, fecha, conteo, desc, googlecalendar,imgEvento, imgConfiguracion, seccion1, costo1, seccion2, costo2, seccion3, costo3, seccion4, costo4, seccion5, costo5, seccion6, costo6, seccion7, costo7, seccion8, costo8, utm, objetos, tour, playlist  } =nota;

    let fechaActual = new Date();
    let fechaFiltro = new Date(conteo);
    let Time = (fechaFiltro - fechaActual + 1000) / 1000;
    let Seconds = ('0' + Math.floor(Time % 60)).slice(-2);
    let Minuts = ('0' + Math.floor(Time / 60 % 60)).slice(-2);
    let Hours = ('0' + Math.floor(Time / 3600 % 24)).slice(-2);
    let Days = Math.floor(Time / (3600 * 24));
    let Restante = Days+"d "+Hours+":"+Minuts+" HRS";

    return (
        <> 
            <SEO Title={name}/>
            <Layout>
                <Section>
                    <HeroMobile>
                        <TitleEvento 
                            Text1={name}
                            Text2={fecha}
                        />
                        <Fade>
                            <img src={imgEvento} alt={name}/>
                        </Fade>
                        <p>{desc}</p>
                        <CounterMobile>
                                <h4>{Restante}</h4>
                                <Btn href={googlecalendar} target="blank">Google Calendar</Btn>
                        </CounterMobile>
                    </HeroMobile>
                    <HeroDesktop>
                        <Fade>
                            <img src={imgEvento} alt={name}/>
                        </Fade>
                        <div>
                            <h2>{name}</h2>   
                            <h3>{fecha}</h3>
                            <p>{desc}</p>
                            <Counter>
                                <h4>{Restante}</h4>
                                <Btn href={googlecalendar} target="blank">Google Calendar</Btn>
                            </Counter>
                        </div>
                    </HeroDesktop>
                    <Configuracion>
                    <h2>Configuración</h2>
                    <ConfiguracionImg  src={imgConfiguracion} alt={name}/>  
                    <h3>Costos</h3>                
                    <ConfiguracionText>                    
                        <Costos>
                            { seccion1 ? <><h4>{seccion1}</h4><p>${costo1}</p></> : null }
                            { seccion2 ? <><h4>{seccion2}</h4><p>${costo2}</p></> : null }
                            { seccion3 ? <><h4>{seccion3}</h4><p>${costo3}</p></> : null }
                            { seccion4 ? <><h4>{seccion4}</h4><p>${costo4}</p></> : null }
                            { seccion5 ? <><h4>{seccion5}</h4><p>${costo5}</p></> : null }
                            { seccion6 ? <><h4>{seccion6}</h4><p>${costo6}</p></> : null }
                            { seccion7 ? <><h4>{seccion7}</h4><p>${costo7}</p></> : null }
                            { seccion8 ? <><h4>{seccion8}</h4><p>${costo8}</p></> : null }
                        </Costos>                 
                        <Adicionales>
                            <div> 
                                <Btn href={utm} target="blank">Boletos</Btn>                            
                            </div>
                        </Adicionales>  
                        <Compartir>
                            <a href="https://www.facebook.com/gopepsicenterwtc/photos/a.411427368881710/3007832065907881/?type=3&theater" target="blank">
                                <img src="/icon/facebookshare.svg" alt={name}/>
                            </a>
                            <a href="https://twitter.com/PepsiCenterWTC/status/1233436926780329991" target="blank">
                                <img src="/icon/twittershare.svg" alt={name}/>
                            </a>
                        </Compartir>
                    </ConfiguracionText>                     
                </Configuracion>                    
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
            </Layout>
        </>
     );
}
 
export default Evento;