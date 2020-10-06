import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import SEO from '../components/layout/seo';
import FormEvento from '../components/forms/formEvento';
import {Menu} from '../components/ui/layout';

const General = styled.section`
    width: 90vw;    
    margin: 0 auto 1em auto;
    display: grid;
    @media (min-width: 1024px) {        
        width: 95vw;    
    }       
`;

const Options = styled.nav`  
    text-align: center;
    display: flex;    
    align-items: center;
    gap: 1em;
    img{
        width: 140px;
    }
    h3{
        color: #00d8ff;
        font-weight: 900;
    }
`;

const Data = styled.section`
`;

const Admin = () => {
    return (
        <>
            <SEO Title="Admin"/>
            <General>
                <Menu>
                    <Link href="/">
                        <img src="/img/pcwtc.png" alt="PCWTC"/>
                    </Link>                   
                    <nav>    
                        <a>Eventos</a>
                        <a>Notas</a>
                        <a>Leads</a>
                        <a>Salir</a>
                    </nav>         
                </Menu>
                <Data>
                    <FormEvento/>
                </Data>                
            </General>
        </>
     );
}
 
export default Admin;
