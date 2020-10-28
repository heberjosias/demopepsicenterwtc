import React from 'react';
import styled from '@emotion/styled';

const Section = styled.div`
    margin: auto;    
    overflow: hidden;
    ul{
        display: flex;
        width: 500%;
        padding: 0;
        list-style-type: none;

        animation: cambio 20s infinite;     
        animation-timing-function: ease-in;   
        li{
            width: 100%;
            img{
                width: 100%;
                box-shadow:4px 1px 4px 2px rgba(0,0,0,.4);                
            }
        }
    }
    @keyframes cambio {
        0% {margin-left: 0;}
        15% {margin-left: 0;}
        
        20% {margin-left: -100%;}
        35% {margin-left: -100%;}

        40% {margin-left: -200%;}
        55% {margin-left: -200%;}

        60% {margin-left: -300%;}
        75% {margin-left: -300%;}

        80% {margin-left: -400%;}
        95% {margin-left: -400%;}
    }
`;

const ImgCarrousel = ({elements}) => {
    //console.log(elements);
    return ( 
        <Section>
            <ul>
                {elements.map(element => (
                    <li>
                        <img 
                            src={element.url}
                            alt={element.alt}
                        />
                    </li>
                ))}
            </ul>
        </Section>    
     );
}
 
export default ImgCarrousel;