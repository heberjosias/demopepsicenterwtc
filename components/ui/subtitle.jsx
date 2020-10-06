import React from 'react'
import styled from '@emotion/styled';

const Section = styled.div`
    text-align: center;
`; 

const Subtitle1 = styled.h2`    
    letter-spacing: 2px;
    font-weight: 600;
    @media (min-width: 768px) {
        text-transform: uppercase;
        letter-spacing: 8px;
        color: #ffffff;
        &::first-letter, span{
            color: #00d8ff;
        }
    }
`;

const SubTitle = ({Text1, LastLetter}) => {
    return ( 
        <Section>
            <Subtitle1>{Text1}<span>{LastLetter}</span></Subtitle1>
        </Section>
     );
}
 
export default SubTitle;