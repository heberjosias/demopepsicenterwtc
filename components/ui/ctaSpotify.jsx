import React from 'react'
import styled from '@emotion/styled';
import Zoom from 'react-reveal/Zoom';

const Section = styled.div`
    background-image: linear-gradient(-260deg, rgba(4,27,49,.4) 32%, rgba(24,48,82,.4) 48%, rgba(4,27,49,.4) 80%);     
    display: flex;
    justify-content: center;
    align-items: center;
    div{       
        img{
            width: 3.5em;
            margin: 0 2em 0 0; 
            @media (min-width: 1024px) {
                width: 5em;
            }  
        }
        h3{
            color: #00D95F;
        }
    }
`;

const Content = styled.div`
    padding: 1em .5em;
    display: flex;
    align-items: center;
    justify-content: center; 
    @media (min-width: 767px) {
        padding: 2em;
    }  
`;

const CtaSpotify = ({text1, text2}) => {
    return (
        <Section>
            <Zoom>
                <a href="https://open.spotify.com/playlist/61Pym1kUmJrOzkUb7FIwNV" target="blank">
                    <Content>
                        <img src="/icon/ctaspotify.svg"/>
                        <div>
                            <h3>{text1}</h3>
                            <h3>{text2}</h3>
                        </div>
                    </Content>
                </a>
            </Zoom>
        </Section>
      );
}
 
export default CtaSpotify;