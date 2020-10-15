import React, {useState} from "react";
import styled from '@emotion/styled';

const Imagen = styled.img`
    padding: 1em 0;
    @media (min-width: 768px) {
        transition: transform .4s;
        &:hover{
            transition: transform .4s;
            transform: scale(1.1);
        }
    }        
`;

const ModalImg = styled.div`
    background-color: rgba(255,255,255,.8);
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 9999;
    top:0vh;
    left:0vh;    
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    img{
        max-height: 95%;
        max-width: 95%;
    }
    cursor: pointer;
    @media (min-width: 1023px) {
        background-color: rgba(255,255,255,.5);
        img{
            max-height: 90%;
            max-width: 90%;
        }
    }
`;

const ImgModal = ({url, alt, imgOpen}) => {

    const [modal, openModal] = useState(false);
    return ( 
        <>
        <a onClick={()=>openModal(true)}>
            <Imagen src={url} alt={alt}/>
        </a>       
        { modal ? (
            <a onClick={()=>openModal(false)}>
                <ModalImg>
                    <img src={imgOpen} alt={alt}/>
                </ModalImg>
            </a>
        ) : null } 
        </>
     );
}


export default ImgModal;