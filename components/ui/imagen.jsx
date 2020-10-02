import React from 'react'
import styled from '@emotion/styled';

const Image = styled.img`
    box-shadow: 1px 1px 4px 2px rgba(0,0,0,.4);
    transition: transform .4s;
    &:hover{
        transition: transform .4s;
        transform: scale(1.1);
    }  
`;

const Imagen = ({url, alt}) => {
    return ( 
        <Image
            src={url}
            alt={alt}
        />
     );
}
 
export default Imagen;