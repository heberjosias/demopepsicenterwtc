import React from 'react';

import {FooterStyle, RRSS} from '../ui/layout';

const Footer = () => {
    return ( 
        <FooterStyle>
            <p>
                <img src="/img/patrocinadores.png" alt="patrocinadores"/>
            </p>
            <section>
                <p>Todos los derechos reservados</p>
                <p>HIR Expo Internacional ©2020</p>
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
 
export default Footer;