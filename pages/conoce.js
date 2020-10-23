import React from 'react';
import styled from '@emotion/styled';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import MobileBack from '../components/ui/mobileBack';
import Title from '../components/ui/title';
import SubTitle from '../components/ui/subtitle';
import Video from '../components/ui/video';
import Imagen from '../components/ui/imagen';
import Footer from '../components/layout/footer';

const General = styled.div`
    position:relative;
`;

const Back = styled.img`
    position: absolute; 
    top: 9%;      
    margin: 0 auto;
    z-index: -999;          
    @media (max-width: 1024px) {
        top: 10%;    
        height: auto;   
        background-repeat: repeat-y;
    }
`;

const Intro = styled.section`
    width: 90vw;
    margin: 0 auto;
    padding: 1em 0;
    display: grid;
    gap: 1em;
    p{        
        margin: 0 0 1em 0;
        text-align: justify;
        @media (min-width: 1025px) {
            font-size: 1.4em;
        }    
    }
    h3{
        padding: 1em 0 0 0;
    }     
    @media (min-width: 1025px) {
        padding: 3em 0 2em 0;
        width: 95vw;
        grid-template-columns: repeat(2, 1fr);
        gap: 2em;
    }   
`;

const ImgIntro = styled.img`
    box-shadow: 1px 1px 4px 2px rgba(0,0,0,.3);
    @media (min-width: 768px) {
        display: none;
    } 
`;

const Destacados = styled.div`
    padding: 1em 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
    text-align: center;
    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    } 
    div{
        text-align: center;
        p{
            margin: 0;
            text-align: center;
            color: #00d8ff;
            font-weight: 600; 
        }
    }
`;

const Icon = styled.div`
    background-image: linear-gradient(-260deg, rgba(4,27,49,.1) 32%, rgba(24,48,82,.4) 48%, rgba(4,27,49,.2) 80%);     
    padding: 1.5em;
    border-radius: 50%;
`;

const Gallery = styled.section` 
    width: 90vw;
    margin: 0 auto;
    padding: 1em 0 0 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;        
    @media (min-width: 1024px) {
        padding: 1em 0 2em 0;
        width: 95vw;
        grid-template-columns: repeat(3, 1fr);
        gap: 2em;  
    }
`;

const MobileDisplay = styled.div`
    @media (max-width: 1023px) {
        display:none;
    }    
`;

const Conoce = () => {
    return ( 
        <>
            <SEO Title="Conoce"/>
            <General>
                <MobileBack
                    url="/img/pcwtcback.png"
                />
                <Back src="/img/points.png" />           
                <Layout>
                    <Title 
                        Text1="Conoce"
                        Text2="PCWTC"
                    />
                    <SubTitle
                        Text1="Pepsi Center WT"
                        LastLetter="C"
                    />
                    <Intro>
                        <div>
                            <p>Uno de los mejores venues en México donde se presentan grandes espectáculos en vivo, streaming e híbridos.</p>
                            <ImgIntro src="/img/conocepcwtc.jpg" alt="Conoce PCWTC"/>
                            <h3>En el Año</h3>
                            <Destacados>
                                <Zoom cascade>
                                    <div>
                                        <Icon>
                                            <img src="/icon/karaoke.svg" alt="Conciertos"/>
                                        </Icon>       
                                        <br></br>                         
                                        <p>40</p>
                                        <p>Conciertos</p>
                                    </div>
                                    <div>
                                        <Icon>
                                            <img src="/icon/visitor.svg" alt="Visitantes"/>
                                        </Icon>     
                                        <br></br>                         
                                        <p>4,000</p>
                                        <p>Visitantes</p>
                                    </div>           
                                    <div>
                                        <Icon>
                                            <img src="/icon/spotlights.svg" alt="Shows"/>
                                        </Icon>     
                                        <br></br>                         
                                        <p>10</p>
                                        <p>Shows</p>
                                    </div>      
                                    <div>
                                        <Icon>
                                            <img src="/icon/soldout.svg" alt="Sold out"/>
                                        </Icon>     
                                        <br></br>                         
                                        <p>12</p>
                                        <p>Sold out</p>
                                    </div>     
                                </Zoom>                                                                   
                            </Destacados>
                        </div>
                        <Video
                            url="https://youtu.be/tG3a7CfOXGE"
                        />
                    </Intro>
                    <Gallery>
                        <Fade bottom>
                            <Imagen
                                url="/img/galeria1.jpg"
                                alt="Galeria PCWTC"
                            />
                        </Fade> 
                        <Fade bottom>
                            <Imagen
                                url="/img/galeria2.jpg"
                                alt="Galeria PCWTC"
                            />
                        </Fade> 
                        <Fade bottom>
                            <Imagen
                                url="/img/galeria3.jpg"
                                alt="Galeria PCWTC"
                            />
                        </Fade> 
                        <Fade bottom>
                            <Imagen
                                url="/img/galeria4.jpg"
                                alt="Galeria PCWTC"
                            />
                        </Fade> 
                        <Fade bottom>
                            <Imagen
                                url="/img/galeria5.jpg"
                                alt="Galeria PCWTC"
                            />
                        </Fade>                   
                        <Fade bottom>
                            <Imagen
                                url="/img/galeria6.jpg"
                                alt="Galeria PCWTC"
                            />
                        </Fade>
                        <Fade bottom>
                            <Imagen
                                url="/img/galeria7.jpg"
                                alt="Galeria PCWTC"
                            />
                        </Fade>
                        <Fade bottom>
                            <Imagen
                                url="/img/galeria8.jpg"
                                alt="Galeria PCWTC"
                            />
                        </Fade>
                        <Fade bottom>
                            <MobileDisplay>
                                <Imagen
                                    url="/img/galeria9.jpg"
                                    alt="Galeria PCWTC"
                                />
                            </MobileDisplay>
                        </Fade>                                                                        
                    </Gallery>
                <Footer/>
                </Layout>
            </General>
        </>
     );
}
 
export default Conoce;