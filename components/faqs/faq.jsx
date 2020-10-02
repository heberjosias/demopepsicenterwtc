import React, {useState} from 'react';
import styled from '@emotion/styled';

const Pregunta = styled.p`
    border-bottom: 1px solid #00d8ff;
    padding-bottom: .4rem;
    @media (max-width: 768px) {
        font-size: 1em;
    }    
`;

const Respuesta = styled.p`
    font-weight:600;
    @media (max-width: 768px) {
        font-size: 1em;
    }        
`;

const Faq = ({element}) => {

    const[active, setActive] = useState(false)
    const handleActive = () => {
        setActive(true);
    }
    const handleInactive = () => {
        setActive(false);
    }

    return ( 
        <div>
            <a onClick={handleActive} onDoubleClick={handleInactive}>
                <Pregunta>{element.pregunta}</Pregunta>            
            </a>
            { active ? <Respuesta>{element.respuesta}</Respuesta>  : null }            
        </div>    
     );
}
 
export default Faq;