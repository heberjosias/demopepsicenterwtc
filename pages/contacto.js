import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';
import Link from 'next/link';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import Title from '../components/ui/title';
import SubTitle from '../components/ui/subtitle';
import FormContacto from '../components/forms/formContacto';
import {Btn} from '../components/ui/btn';

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
    margin: 2em auto;
    display: grid;
    align-items: center;
    gap: 2em;
    @media (min-width: 1024px) {
        width: 95vw;
        grid-template-columns: repeat(2, 1fr);
    }  
`;

const Info = styled.div`
    display: grid;
    gap: 2em;    
    text-align: center;
    h3{
        color:#00d8ff;
    }
    p{
        font-size: 1.4em;
    }
    h3, p{
        margin: 0;
    }    
    a{
       font-weight: 600;
       font-style: italic; 
       &:hover{
            color:#ff0060;
       }
    }
`;

const Prensa = styled.div`
    margin: 3em 0;
    text-align: center;
`;

const Mapa = styled.section`
    background-image: linear-gradient(-260deg, rgba(4,27,49,.4) 32%, rgba(24,48,82,.4) 48%, rgba(4,27,49,.4) 80%);     
    box-shadow: 1px 1px 4px 2px rgba(0,0,0,.5);
    -webkit-box-shadow: 1px 2px 5px rgba(0,0,0,.5);
    -moz-box-shadow: 1px 2px 5px rgba(0,0,0,.5);    
    width: 90vw;
    margin: 1em auto;  
    height: 300px;          
    @media (min-width: 1024px) {
        width: 95vw;
        height: 400px;        
    }  
`;


const Contacto = () => {
    return ( 
        <> 
        <SEO Title="Contacto"/>
        <General>   
            <Circle src="/img/circle.png" />       
            <Layout>
                <Title 
                    Text1="Contacto"
                    Text2="PCWTC"
                />
                <SubTitle
                    Text1="Datos de contact"
                    LastLetter="o"
                /> 
                <Datos>
                    <FormContacto/>
                    <Info>
                        <div>
                            <h3>Horario de taquillas PCWTC:</h3>
                            <p>Martes a Domingo de 11:00 a 19:00 hrs</p>
                        </div>                    
                        <div>
                            <h3>Boletos disponibles en:</h3>
                            <p><a href="https://www.ticketmaster.com.mx/pepsi-center-wtc-boletos-mexico/venue/164952" target="blank">ticketmaster.com.mx</a></p>
                        </div>                    
                        <div>
                            <h3>Teléfono</h3>
                            <p><a href="tel:5590009736">(55) 9000 9736</a> - <a href="tel:5590009717">(55) 9000 9717</a></p>
                        </div>
                    </Info>
                </Datos>
                <Prensa>
                    <Link href="/prensa">
                        <Btn>Registro de prensa</Btn>
                    </Link>
                </Prensa>
                <Mapa>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.4094495100967!2d-99.17688228498979!3d19.394707146916744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8e52960c68d%3A0x32271a8363b4789f!2sPepsi%20Center%20WTC!5e0!3m2!1ses-419!2smx!4v1590435492672!5m2!1ses-419!2smx" 
                        width="100%" 
                        height="100%" 
                        frameborder="0">
                    </iframe>
                </Mapa>
            </Layout>
        </General>
        </>
     );
}
 
export default Contacto;