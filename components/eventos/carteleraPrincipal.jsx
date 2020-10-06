import React, {useState} from 'react';
import Router from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled';

import {Label, InputBuscar} from '../ui/form';
import {Btn, InputSubmit} from '../ui/btn';

import EventoPreview from '../eventos/eventoPreview';
import useEventos from '../../hooks/useEventos';

const Section = styled.section`
    width: 90vw;
    display: grid;
    gap: 2em;
    margin: 1em auto 3em auto;
    form{
        display: grid;
        gap: .5em;
        text-align: center;
    }
    @media (min-width: 1024px) {
       display: none;
    }  
`;

const Cartelera = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
`;

const CTA = styled.div`
    text-align: center;
`;

const CarteleraPrincipal = () => {

    const {eventos} = useEventos('creado');

    const [ busqueda, guardarBusqueda] = useState('');
    
    const buscarPerfiles = e => {        
        e.preventDefault();
        if(busqueda.trim() === '') return;

        // redireccionar a /buscar
        Router.push({
            pathname: '/search', 
            query: { q : busqueda }
        })
    }

    return ( 
        <Section>
            <form
                onSubmit={buscarPerfiles}
            >
                <Label htmlFor="buscar">Busca tu evento</Label>
                <InputBuscar
                    type="text"
                    id="buscar"
                    name="buscar"                    
                    placeholder="Busca tu evento"
                    onChange={e =>  guardarBusqueda(e.target.value) }
                />
                <InputSubmit
                    type="submit"
                    value="Buscar"
                />
            </form>
            <Cartelera>
                { eventos.map(evento => (
                    <EventoPreview
                        key={evento.id}
                        data={evento}
                    />
                ))}
            </Cartelera>
            <CTA>
                <Link href="/cartelera">
                    <Btn>Ver más</Btn>
                </Link>
            </CTA>
        </Section>
     );
}
 
export default CarteleraPrincipal;