import React from 'react'
import styled from '@emotion/styled';

const Section = styled.div`
    text-align: center;
`; 

const Subtitle1 = styled.h2`    
    letter-spacing: 2px;
    font-weight: 600;
    z-index: 999;
    @media (min-width: 768px) {
        text-transform: uppercase;
        letter-spacing: 8px;
        color: #ffffff;
        &::first-letter, span{
            color: #00d8ff;
        }
    }
`;

const SubtitleBack = styled.h2`
    margin: -54px 0 0 0;
    text-transform: uppercase;
    letter-spacing: 8px;
    font-size: 3em;
    -webkit-text-stroke: 1px rgba(0, 216, 255, .20);
    color: transparent;
    z-index: -999;
    @media (max-width: 1020px) {
        font-size: 2em;
        margin: -40px 0 0 0;
    }    
    @media (max-width: 767px) {
        display: none;
    }
`;

const SubTitle = ({Text1, LastLetter}) => {
    return ( 
        <Section>
            <Subtitle1>{Text1}<span>{LastLetter}</span></Subtitle1>
            <SubtitleBack>{Text1}<span>{LastLetter}</span></SubtitleBack>
        </Section>
     );
}
 
export default SubTitle;