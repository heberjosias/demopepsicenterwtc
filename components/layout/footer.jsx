import React from 'react';
import styled from '@emotion/styled';

const FooterStyle = styled.footer`
    width: 90vw;
    margin: 0 auto;
    padding: 0 0 2em 0;
    display: grid;
    gap: 1em;
    align-items: center;
    text-align: center;
    p{
        img{
            @media (max-width: 1025px) {
                display: none;
            }
        }
    }
    section{
        text-transform: uppercase;
        font-size: .8em;
        p{
            margin:0;
        }
        a{
            color: #ff0060;
            font-weight: 600;
        }
    }
    @media (min-width: 1025px) {
        width: 95vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            text-align: right;
        }
    }    
`;

const Footer = () => {
    return ( 
        <FooterStyle>
            <p>
                <img src="/img/patrocinadores.png" alt="patrocinadores"/>
            </p>
            <section>
                <p>Todos los derechos reservados</p>
                <p>HIR Expo Internacional ©2020</p>
                <p><a href="https://ciecwtc.com/doc/avisodeprivacidad.pdf" target="blank">Aviso de privacidad</a></p>            
            </section>
        </FooterStyle>
     );
}
 
export default Footer;