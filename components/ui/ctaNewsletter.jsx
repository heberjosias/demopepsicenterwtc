import React from 'react'
import styled from '@emotion/styled';
import Zoom from 'react-reveal/Zoom';

import {Label, Input} from './form';
import {InputSubmit} from './btn';

const Section = styled.div`
    background-image: linear-gradient(-260deg, rgba(4,27,49,.4) 32%, rgba(24,48,82,.4) 48%, rgba(4,27,49,.4) 80%);     
    padding: 1em 2em 2em 2em; 
    text-align: center;
    form{        
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1em;
    }
`;

const Header = styled.div`
    padding: 1em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;    
    img{
        width: 4.5em;
    }
    h3, p{
        margin: 0;
    }
    p{
        font-size: 1em;
    }    
`;

const CtaNewsletter = () => {
    return ( 
        <Section>
            <Zoom>
                <Header>
                    <img src="/icon/concert.svg" alt="Conciertos PCWTC"/>
                    <div>
                        <p>Suscríbete a nuestro</p>
                        <h3>Newsletter</h3>
                    </div>
                </Header>      
                <form>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        type="email"
                        id="email"
                        name="email" 
                        placeholder="Email"               
                    />
                    <InputSubmit
                        type="submit"
                        value="enviar"
                    />
                </form>   
            </Zoom>   
        </Section>
     );
}
 
export default CtaNewsletter;