import React from 'react'
import Link from 'next/link';
import Zoom from 'react-reveal/Zoom';
import styled from '@emotion/styled';


const Evento = styled.div`
    cursor: pointer;
    position:relative;
    width: 300px;
`;

const ImageFront = styled.img`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    position:relative;
`;

const Titulo = styled.div`
    opacity:0;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;    
    :hover{
        opacity:1;
        position: absolute;
        background-color: rgba(1,10,65,.9);        
        display:flex;
        justify-content:center;
        align-items:center;
        font-size: 1.4em;
        font-weight: 600;
        font-style: italic;
        color: #ffffff;
    }
`;


const DesktopPreview = ({data}) => {

    const {id, name, imgCartelera} = data;

    return (         
        <Zoom>
            <Link href="/cartelera/[id]" as={`/cartelera/${id}`}>
            <Evento>
                <ImageFront
                    src={imgCartelera}
                    alt={name}
                />
                <Titulo>
                    <p>{name}</p>
                </Titulo>            
            </Evento>
            </Link>
        </Zoom>
     );
}
 
export default DesktopPreview;