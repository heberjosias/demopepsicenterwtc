import React from 'react';
import styled from '@emotion/styled';

const Section = styled.div`
    position: absolute; 
    z-index: -999;
    img{
        opacity: 0.6;
    }
    @media (min-width: 767px) {
        display: none;
    }
`;

const MobileBack = ({url}) => {
    return ( 
        <Section>
            <img src={url} alt="PCWTC"/>
        </Section>
     );
}
 
export default MobileBack;