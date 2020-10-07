import React from 'react';
import Link from 'next/link';
import Zoom from 'react-reveal/Zoom';
import styled from '@emotion/styled';

const Evento = styled.figure`
    display: flex;
    margin: 0;
    position:relative;
    cursor: pointer;
    box-shadow: 1px 1px 4px 2px rgba(0,0,0,.4);
    figcaption{            
        position: absolute; 
        width: 100%;
        padding: .5em 0;    
        background-image: linear-gradient(-260deg, rgba(4,27,49,1) 32%, rgba(24,48,82,1) 48%, rgba(4,27,49,1) 60%);     
        color:#00d8ff;
        font-size: 1.1em;
        font-weight: 800;
        font-style: italic;
        text-align: center;
        max-width: auto;
        bottom: 1em;
        z-index: 10;            
        @media (max-width: 360px) {
            font-size: 1.1em;
        }
        @media (max-width: 320px) {
            font-size: .8em;
        }
    }
`;

const EventoPreview = ({data}) => {

    const {id, name, imgCartelera} = data;

    return ( 
        <Link href={id}>
            <Zoom>
                <Evento>   
                    <img src={imgCartelera} alt={name}/>          
                    <figcaption>{name}</figcaption>  
                </Evento>
            </Zoom>
        </Link>
     );
}
 
export default EventoPreview;