import React from 'react'
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

import {Btn} from '../ui/btn';

const General = styled.section`
    margin: 1em 0;
    img{
        box-shadow: 1px 1px 4px 2px rgba(0,0,0,.4);
        transition: transform .4s;
        &:hover{
            transition: transform .4s;
            transform: scale(1.03);
        }  
    }
`;

const SectionDesktop = styled.div`
    width: 95vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);    
    gap: 2em;
    @media (max-width: 767px) {
        display: none;
    }  
`;

const PreviewDesktop = styled.div`
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    color: #00d8ff;
    div{
        margin: 1em 0 0 0;
    }
    p, h4{
        margin: 0;
    }
`;

const SectionMobile = styled.div`
    margin: 1em 0 1em 0;
    display: grid;   
    @media (min-width: 767px) {
        display: none;
    }  
`;

const PreviewMobile = styled.div`
    margin: 1em 0;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    text-transform: uppercase;
    color: #00d8ff;
    div{
        background-image: linear-gradient(-260deg, rgba(0,4,25,1) 32%, rgba(4,11,49,1) 48%, rgba(0,4,25,1) 60%);     
        text-align: center;
        padding: .8em .5em;
    }
    p, h4{
        margin: 0;
    }
`;

const Cta = styled.div`
    text-align: center;
`;

const Blog = () => {
    return (
        <> 
        <General>
            <SectionDesktop>
                <Fade cascade>
                    <a href="https://youtu.be/zviiUs92Od8" target="blank">
                        <PreviewDesktop>
                            <img src="/img/jmadero.jpg" />
                            <div>
                                <p>Aftermovie</p>
                                <h4>"José Madero"</h4>
                            </div>
                        </PreviewDesktop>
                    </a>
                    <a href="https://youtu.be/KJSygJ3eKOc" target="blank">
                        <PreviewDesktop>
                            <img src="/img/metronomy.jpg" />
                            <div>
                                <p>Aftermovie</p>
                                <h4>"Metronomy"</h4>
                            </div>
                        </PreviewDesktop>
                    </a>
                    <a href="https://youtu.be/0BiW-SExKEc" target="blank">
                        <PreviewDesktop>
                            <img src="/img/sabino.jpg" />
                            <div>
                                <p>Aftermovie</p>
                                <h4>"Sabino"</h4>
                            </div>
                        </PreviewDesktop>
                    </a>
                    <a href="https://youtu.be/3Io9K1LMla4" target="blank">
                        <PreviewDesktop>
                            <img src="/img/rupaul.jpg" />
                            <div>
                                <p>Aftermovie</p>
                                <h4>"RuPaul's Drag Race"</h4>
                            </div>
                        </PreviewDesktop>                                    
                    </a>
                </Fade>
            </SectionDesktop>
            <SectionMobile>                
                <Fade cascade>
                    <a href="https://youtu.be/zviiUs92Od8" target="blank">
                        <PreviewMobile>
                            <img src="/img/jmadero.jpg" />
                            <div>
                                <p>Aftermovie</p>
                                <h4>"José Madero"</h4>
                            </div>
                        </PreviewMobile>
                    </a>
                    <a href="https://youtu.be/KJSygJ3eKOc" target="blank">
                        <PreviewMobile>
                            <div>
                                <p>Aftermovie</p>
                                <h4>"Metronomy"</h4>
                            </div>
                            <img src="/img/metronomy.jpg" />
                        </PreviewMobile>                
                    </a>
                </Fade>
            </SectionMobile>
            {/*
                <Cta>
                    <Btn>Ver Más</Btn>
                </Cta>
             */}
        </General>
        </>
     );
}
 
export default Blog;