import React, {useState} from 'react';
import styled from '@emotion/styled';

const Pregunta = styled.p`
    font-weight:600;
    border-bottom: 1px solid #00d8ff;
    padding: 0 0 .4em 0;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 1em;
    }    
`;

const Respuesta = styled.p`
    @media (max-width: 768px) {
        font-size: 1em;
    }        
`;

const Faq = ({element}) => {

    const[active, setActive] = useState(false)

    return ( 
        <div>
            <a onClick={()=>setActive(!active)}>
                <Pregunta>{element.pregunta}</Pregunta>            
            </a>
            { active ? <Respuesta>{element.respuesta}</Respuesta>  : null }            
        </div>    
     );
}
 
export default Faq;