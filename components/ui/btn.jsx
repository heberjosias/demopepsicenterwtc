import styled from '@emotion/styled';

export const Btn = styled.a`
        padding: .2em 2em;
        background:#049cfd;
        box-shadow: inset 10px 10px 10px rgba(255,255,255,.2), inset -2px -2px 3px rgba(0,0,0,.2), 5px 5px 10px rgba(0,0,0,.2);             
        border-radius: 5px; 
        color: #ffffff;
        text-shadow: 1px 2px 2px rgba(0,0,0,.3);
        box-shadow: 1px 2px 5px rgba(0,0,0,.2);
        -webkit-box-shadow: 1px 2px 5px rgba(0,0,0,.2);
        -moz-box-shadow: 1px 2px 5px rgba(0,0,0,.2);
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 600;    
        cursor:pointer;
        &:hover{
            background: transparent;
            border: 1px solid #ff0060;
            color:#ff0060;   
            text-shadow: 1px 1px 2px rgba(255,255,255,.1);
            box-shadow: 1px 0px 2px 1px rgba(4,156,253,.2);
        }
`;