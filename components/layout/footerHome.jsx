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
        grid-template-columns: repeat(3,1fr);
    }    
`;

const RRSS = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        height: 2em;
        max-width: 5em;            
    }
`;

const FooterHome = () => {
    return ( 
        <FooterStyle>
            <p>
                <img src="/img/patrocinadores.png" alt="patrocinadores"/>
            </p>
            <section>
                <p>Todos los derechos reservados</p>
                <p>©2020 HIR Expo Internacional</p>
                <a href="https://ciecwtc.com/doc/avisodeprivacidad.pdf" target="blank">Aviso de privacidad</a>
            </section>
            <RRSS>
                <a href="https://www.facebook.com/gopepsicenterwtc/" target="blank">
                    <img src="/icon/facebook.svg" alt="RSSS"/>
                </a>
                <a href="http://instagram.com/pepsicenterwtc" target="blank">
                    <img src="/icon/instagram.svg" alt="RSSS"/>
                </a>              
                <a href="https://twitter.com/pepsicenterwtc" target="blank">
                    <img src="/icon/twitter.svg" alt="RSSS" />
                </a>
                <a href="https://www.youtube.com/channel/UCkVoSTXU62sxsSohYPgClGg" target="blank">
                    <img src="/icon/youtube.svg" alt="RSSS"/>
                </a>
                <a href="hhttps://open.spotify.com/user/pepsicenterwtc" target="blank">
                    <img src="/icon/spotify.svg" alt="RSSS"/>
                </a>  
            </RRSS>
        </FooterStyle>
     );
}
 
export default FooterHome;