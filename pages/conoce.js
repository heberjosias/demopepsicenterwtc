import React from 'react';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import Title from '../components/ui/title';
import SubTitle from '../components/ui/subtitle';
import Video from '../components/ui/video';
import Imagen from '../components/ui/imagen';

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
        padding: 2em 0;
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
    background: rgb(69,166,222);
    background: -moz-radial-gradient(circle, rgba(69,166,222,0.8239670868347339) 0%, rgba(28,59,175,0.8911939775910365) 47%, rgba(28,59,175,0.8827906162464986) 72%, rgba(69,166,222,0.7763480392156863) 81%, rgba(56,27,167,1) 90%);
    background: -webkit-radial-gradient(circle, rgba(69,166,222,0.8239670868347339) 0%, rgba(28,59,175,0.8911939775910365) 47%, rgba(28,59,175,0.8827906162464986) 72%, rgba(69,166,222,0.7763480392156863) 81%, rgba(56,27,167,1) 90%);
    background: radial-gradient(circle, rgba(69,166,222,0.8239670868347339) 0%, rgba(28,59,175,0.8911939775910365) 47%, rgba(28,59,175,0.8827906162464986) 72%, rgba(69,166,222,0.7763480392156863) 81%, rgba(56,27,167,1) 90%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#45a6de",endColorstr="#381ba7",GradientType=1);
    box-shadow: 1px 1px 4px 2px rgba(0,0,0,.2);
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

const Conoce = () => {
    return ( 
        <>
            <SEO Title="Conoce"/>
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
                        <p>Concebido como uno de los mejores venues en México donde se presentan grandes espectaculos en vivo.</p>
                        <ImgIntro src="/img/conocepcwtc.jpg" alt="Conoce PCWTC"/>
                        <h3>En el Año</h3>
                        <Destacados>
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
                        </Destacados>
                    </div>
                    <Video
                        url="https://youtu.be/tG3a7CfOXGE"
                    />
                </Intro>
                <Gallery>
                    <Imagen
                        url="/img/galeria1.jpg"
                        alt="Galeria PCWTC"
                    />
                    <Imagen
                        url="/img/galeria2.jpg"
                        alt="Galeria PCWTC"
                    />
                    <Imagen
                        url="/img/galeria3.jpg"
                        alt="Galeria PCWTC"
                    />
                    <Imagen
                        url="/img/galeria3.jpg"
                        alt="Galeria PCWTC"
                    />
                    <Imagen
                        url="/img/galeria1.jpg"
                        alt="Galeria PCWTC"
                    />                    
                    <Imagen
                        url="/img/galeria2.jpg"
                        alt="Galeria PCWTC"
                    />                                                                                                                        
                </Gallery>
            </Layout>
        </>
     );
}
 
export default Conoce;