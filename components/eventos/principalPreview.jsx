import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';

import {Btn, BtnCTA} from '../ui/btn';

const EventoDesktop = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
    img{
        cursor: pointer;
        box-shadow: 1px 1px 4px 2px rgba(0,0,0,.4);
        transition: transform .4s;
        &:hover{
            transition: transform .4s;
            transform: scale(1.03);
        }  
    }
    h1{
        width: 60%;
        margin: 0;
        line-height: .8;
    }
    p{
        margin: 10px 0;
        color: #00d8ff;
        font-style: italic;
        font-size: 2.2em;
        font-weight: 400;
        text-transform: uppercase;
    }
    @media (max-width: 768px) {
        display: none;
    }  
`;

const EventoMobile = styled.div`
    display:grid;   
    text-align:center; 
    img{
        margin: 0 auto;
        cursor: pointer;
        box-shadow: 1px 1px 4px 2px rgba(0,0,0,.4);
        transition: transform .4s;
        &:hover{
            transition: transform .4s;
            transform: scale(1.03);
        }  
    }    
    h1{
        width: 80%;
        margin: 0 auto;
        line-height: .8;
    }
    p{
        margin: 0;
        color: #00d8ff;
        font-style: italic;
        font-size: 2em;
        font-weight: 400;
        text-transform: uppercase;
    }
    @media (min-width: 769px) {
        display: none;
    } 
`;

const Bloque = styled.div`
    content:'';
    background-image: linear-gradient(-260deg, rgba(5,19,49,1) 15%, rgba(7,21,62,.8) 48%, rgba(5,19,49,1) 85%);     
    height: 4em;
    width: 60%;
    margin: -20% 0 15% -2em;
`;

const BloqueMobile = styled.div`
    content:'';
    background-image: linear-gradient(-260deg, rgba(5,19,49,1) 15%, rgba(7,21,62,.8) 48%, rgba(5,19,49,1) 85%);     
    height: 6.9em;
    width: 80%;
    margin: -34% auto 0 auto;
    z-index: -10;
    @media (min-width: 767px) {
        margin: -14% auto 0 auto;
        width: 50%;
    } 
`;

const Btns = styled.div`
    margin: 0 0 0 0;
    display: flex;
    align-items: center;
    gap: 1em;
`;

const PrincipalPreview = ({data}) => {
    //console.log(data);
    const {id, name, fecha, imgCartelera, utm} = data;

    return ( 
        <>
        <EventoDesktop>
            <Fade>
                <Link href="/cartelera/[id]" as={`/cartelera/${id}`}>
                    <img src={imgCartelera} alt={name}/>
                </Link>
            </Fade>
            <div>
            <h1>{name}</h1>
            <p>{fecha}</p>
            <Bloque/>
                <Btns>
                    <Link href="/cartelera/[id]" as={`/cartelera/${id}`}>
                        <BtnCTA>Ver más</BtnCTA>
                    </Link>
                    <a href={utm} target="blank">
                        <Btn>Boletos</Btn>
                    </a>
                </Btns>
            </div>
        </EventoDesktop>
        <EventoMobile>
            <Link href="/cartelera/[id]" as={`/cartelera/${id}`}>
                <img src={imgCartelera} alt={name}/>
            </Link>
            <h1>{name}</h1>
            <p>{fecha}</p>
            <BloqueMobile/>
        </EventoMobile>
        </>
     );
}
 
export default PrincipalPreview;