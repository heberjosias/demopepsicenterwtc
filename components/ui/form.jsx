import styled from '@emotion/styled';

export const Label = styled.label`
    display: none;
`;

export const LabelGeneral = styled.label`
    width: 100%;
`;

export const Input = styled.input`
    margin: 0;
    padding: .5em 1em;
    color: #003354;
    text-transform: uppercase;
    width: 90%;
    &::-webkit-input-placeholder{
        color: #003354;
        @media (max-width: 768px) {
         text-align: center;
        }  
    }
    @media (max-width: 768px) {
        text-align: center;
    }  
`;

export const InputGeneral = styled.input`
    background-color:rgba(255,255,255,.8);
    border: 0;
    padding: .5em 1em;
    color: #003354;
    text-transform: uppercase;
    width: 90%;
    &::-webkit-input-placeholder{
        color: #003354;
        @media (max-width: 768px) {
         text-align: center;
        }  
    }
    @media (max-width: 768px) {
        text-align: center;
    } 
`;

export const InputBuscar = styled.input`
    background-color:rgba(255,255,255,.8);
    border: 0;
    padding: .5em 0;
    color: #003354;
    font-size: 1.4em;
    font-weight: 600; 
    width: 100%;
    &::-webkit-input-placeholder{
        color: #003354;
        @media (max-width: 768px) {
         text-align: center;
        }  
    }
    @media (max-width: 768px) {
        text-align: center;
    } 
`;

export const InputAdmin = styled.input`
    background-color:rgba(255,255,255,.8);
    border: 0;
    color: #003354;
    padding: .5em 1em;
    width: 90%;
    @media (max-width: 768px) {
        text-align: center;
    }  
`;

export const TextAreaAdmin = styled.textarea`
    background-color:rgba(255,255,255,.8);
    border: 0;
    padding: .5em 1em;
    color: #003354;
    width: 90%;
`;

export const TextAreaGeneral = styled.textarea`
    background-color:rgba(255,255,255,.8);
    border: 0;
    padding: .5em 1em;
    color: #003354;
    text-transform: uppercase;
    width: 90%;
    &::-webkit-input-placeholder{
        color: #003354;
        @media (max-width: 768px) {
         text-align: center;
        }  
    }
`;

export const CheckGeneral = styled.input`
    width: 20px;
    height: 20px;    
`;

export const CheckLabel = styled.label`
    font-size: 1.2rem;
    font-weight:600;
    margin: 0 0 0 .5em;
`;

export const Error = styled.p`
    width: 90%;
    background-color: #ff0060;
    padding: 1em 1em;
    font-weight: 700;
    font-size: .8rem;
    color: #FFF;
    text-align: center;
    margin: 0;
`;