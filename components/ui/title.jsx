import React from 'react'
import styled from '@emotion/styled';

const Section = styled.div`
    padding: 2em 0;
    text-align: center;
    @media (min-width: 768px) {
        padding: 1em 0;
    }
`; 

const Title1 = styled.h1`
    color:#00d8ff;
    line-height: .3;
`;

const Title2 = styled.h1`
    line-height:1;
    font-weight: 400;
`;

const Title = ({Text1, Text2}) => {
    return ( 
        <Section>
            <Title1>{Text1}</Title1>
            <Title2>{Text2}</Title2>
        </Section>
     );
}
 
export default Title;