import React,{useState, useContext} from 'react';
import Router, {useRouter} from 'next/router';
import styled from '@emotion/styled';

import { Label, InputGeneral, TextAreaGeneral, Error} from '../ui/form';
import {InputSubmit} from '../ui/btn';

import {FirebaseContext} from '../../firebase';
import useValidacion from '../../hooks/useValidacion';
import validarContacto from '../../validacion/validarContacto';

const Section = styled.div`
    background-image: linear-gradient(-260deg, rgba(4,27,49,.4) 32%, rgba(24,48,82,.4) 48%, rgba(4,27,49,.4) 80%);     
    padding: 2em;
    @media (min-width: 1024px) {        
        padding: 3em;
    }   
    form{        
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: .5em;
        @media (min-width: 768px) {        
            gap: 1em;
        } 
    }
`;

const STATE_INICIAL = {
    name: '',
    email:'',
    phone:'',
    msj:''
  }

const FormContacto = () => {

    const [error, guardarError] = useState(false);
    const {valores, errores, handleChange, handleSubmit} = useValidacion(STATE_INICIAL, validarContacto, crearContacto);
    const { name, email, phone, msj} = valores;    

    const router = useRouter();
    const { firebase } = useContext(FirebaseContext);

    async function crearContacto() {
        console.log('Creando Contacto...');    
        const data = {
            name, 
            email,
            phone,
            msj,
            creado: Date.now(), 
          }
        let refData = 'contacto';   
        // insertarlo en bdd
        firebase.db.collection(refData).add(data);
        return router.push('/');
    }

    return ( 
        <Section>
            <form                
                onSubmit={handleSubmit}
                noValidate
            >
                <Label htmlFor="name">Nombre</Label>
                <InputGeneral
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre*"
                    value={name}
                    onChange={handleChange}
                />
                {errores.name && <Error>{errores.name}</Error> }
                <Label htmlFor="email">Email</Label>
                <InputGeneral
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email*"
                    value={email}
                    onChange={handleChange}
                />
                {errores.email && <Error>{errores.email}</Error> }
                <Label htmlFor="phone">Teléfono</Label>
                <InputGeneral
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Teléfono*"
                    value={phone}
                    onChange={handleChange}
                />
                {errores.phone && <Error>{errores.phone}</Error> }
                <Label htmlFor="msj">Mensaje</Label>
                <TextAreaGeneral                
                    id="msj"
                    name="msj"
                    placeholder="Mensaje"
                    rows="3"
                    value={msj}
                    onChange={handleChange}                    
                />
                {error && <Error>{error}</Error>}                                                  
                <InputSubmit
                    type="submit"
                    value="enviar"
                ></InputSubmit>                                            
            </form>
        </Section>
     );
}
 
export default FormContacto;
