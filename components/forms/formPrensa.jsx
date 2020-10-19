import React,{useState, useContext} from 'react';
import Router, {useRouter} from 'next/router';
import styled from '@emotion/styled';

import { Label, InputGeneral, CheckGeneral, CheckLabel, Error} from '../ui/form';
import {InputSubmit} from '../ui/btn';

import {FirebaseContext} from '../../firebase';
import useValidacion from '../../hooks/useValidacion';
import validarPrensa from '../../validacion/validarPrensa';

const Section = styled.div`
    form{
        section{
            display: grid;
            gap: 2em;    
            @media (min-width: 1024px) {        
                grid-template-columns: repeat(2, 1fr);              
            }   
        }
    }
`;

const Contenido = styled.div`
    h3{
        text-align: left !important;
        color:#00d8ff;
        text-transform: uppercase;
        font-weight: 600;
    }
    div{
        margin: 2em 0;
        background-image: linear-gradient(-260deg, rgba(4,27,49,.4) 32%, rgba(24,48,82,.4) 48%, rgba(4,27,49,.4) 80%);     
        padding: 1.5em .5em;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: .5em;
        @media (min-width: 768px) {        
            gap: 1em;
        } 
    }
`;

const ContenidoCheck = styled.div`
    h3{
        text-align: left !important;
        color:#00d8ff;
        text-transform: uppercase;
        font-weight: 600;
    }
    div{
        margin: 2em 0;
        background-image: linear-gradient(-260deg, rgba(4,27,49,.4) 32%, rgba(24,48,82,.4) 48%, rgba(4,27,49,.4) 80%);     
        padding: 1em 1.5em;
        display: grid;
        gap: .1em;
        align-items: center;
        p{
            display: flex;
            margin: 0;
        }
    }
`;

const Send = styled.div`
    text-align:center;
`;

const STATE_INICIAL = {
    medio: '',
    periodico: '',
    television: '',
    revista:'',
    radio:'',
    social: '',
    evento: '',
    nameS: '',
    cargoS: '',
    emailS: '',
    phoneS: '',
    nameE: '',
    cargoE: '',
    emailE: '',
    phoneE: '',    
  }

const FormPrensa = () => {

    const [error, guardarError] = useState(false);
    const {valores, errores, handleChange, handleSubmit} = useValidacion(STATE_INICIAL, validarPrensa, crearPrensa);
    const { medio, periodico, television, revista, radio, social, evento, nameS, cargoS, emailS, phoneS, nameE, cargoE, emailE, phoneE} = valores;    

    const router = useRouter();
    const { firebase } = useContext(FirebaseContext);

    async function crearPrensa() {
        console.log('Creando Prensa...');    
        const data = {
            medio, 
            periodico,
            television,
            revista,
            radio,
            social,
            evento,
            nameS,
            cargoS,
            emailS,
            phoneS, 
            nameE,
            cargoE,
            emailE,
            phoneE,
            creado: Date.now(), 
          }
        let refData = 'prensa';   
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
                <section>
                    <div>
                        <Contenido>
                            <h3>Datos del medio</h3>
                            <div>
                                <Label htmlFor="medio">Nombre Medio</Label>
                                <InputGeneral
                                    type="text"
                                    id="medio"
                                    name="medio"
                                    placeholder="Nombre del medio de comunicación*"
                                    value={medio}
                                    onChange={handleChange}
                                />
                                {errores.medio && <Error>{errores.medio}</Error> }
                            </div>
                        </Contenido>
                        <ContenidoCheck>
                            <h3>Tipo de Medio</h3>
                            <div>
                                <p>
                                    <CheckGeneral 
                                        type="checkbox" 
                                        id="periodico" 
                                        value={periodico}                                    
                                        onChange={handleChange}
                                    />                                   
                                    <CheckLabel htmlFor="categoria">Periódico</CheckLabel>
                                </p>
                                <p>
                                    <CheckGeneral 
                                        type="checkbox" 
                                        id="television" 
                                        value={television}
                                        onChange={handleChange}
                                    />                                   
                                    <CheckLabel htmlFor="categoria">Televisión</CheckLabel>
                                </p>
                                <p>
                                    <CheckGeneral 
                                        type="checkbox" 
                                        id="revista" 
                                        value={revista}
                                        onChange={handleChange}
                                    />                                   
                                    <CheckLabel htmlFor="categoria">Revista</CheckLabel>
                                </p>
                                <p>
                                    <CheckGeneral 
                                        type="checkbox" 
                                        id="radio" 
                                        value={radio}
                                        onChange={handleChange}
                                    />                                   
                                    <CheckLabel htmlFor="categoria">Radio</CheckLabel>
                                </p>
                                <p>
                                    <CheckGeneral 
                                        type="checkbox" 
                                        id="social" 
                                        value={social}
                                        onChange={handleChange}
                                    />                                   
                                    <CheckLabel htmlFor="categoria">Blog, social media</CheckLabel>                                                                                                                
                                </p>
                            </div>
                        </ContenidoCheck>                    
                        <Contenido>
                            <h3>Evento que solicita</h3>
                            <div>
                                <Label htmlFor="evento">Evento</Label>
                                <InputGeneral
                                    type="text"
                                    id="evento"
                                    name="evento"
                                    placeholder="Evento que solicita*"
                                    value={evento}
                                    onChange={handleChange}
                                />
                                {errores.evento && <Error>{errores.evento}</Error> }
                            </div>
                        </Contenido>                    
                    </div>
                    <div>
                        <Contenido>
                            <h3>Datos solicitante</h3>
                            <div>
                                <Label htmlFor="nameS">Nombre</Label>
                                <InputGeneral
                                    type="text"
                                    id="nameS"
                                    name="nameS"
                                    placeholder="Nombre*"
                                    value={nameS}
                                    onChange={handleChange}
                                />
                                {errores.nameS && <Error>{errores.nameS}</Error> }
                                <Label htmlFor="cargoS">Cargo y Sección</Label>
                                <InputGeneral
                                    type="text"
                                    id="cargoS"
                                    name="cargoS"
                                    placeholder="Cargo y Sección*"
                                    value={cargoS}
                                    onChange={handleChange}
                                />                
                                {errores.cargoS && <Error>{errores.cargoS}</Error> }
                                <Label htmlFor="emailS">Email</Label>
                                <InputGeneral
                                    type="email"
                                    id="emailS"
                                    name="emailS"
                                    placeholder="Email*"
                                    value={emailS}
                                    onChange={handleChange}
                                />
                                {errores.emailS && <Error>{errores.emailS}</Error> }
                                <Label htmlFor="phoneS">Teléfono</Label>
                                <InputGeneral
                                    type="number"
                                    id="phoneS"
                                    name="phoneS"
                                    placeholder="Teléfono*"
                                    value={phoneS}
                                    onChange={handleChange}
                                />
                                {errores.phoneS && <Error>{errores.phoneS}</Error> }
                            </div>
                        </Contenido>
                        <Contenido>
                            <h3>Datos editor / jefe</h3>
                            <div>
                                <Label htmlFor="nameE">Nombre</Label>
                                <InputGeneral
                                    type="text"
                                    id="nameE"
                                    name="nameE"
                                    placeholder="Cargo y Sección*"
                                    value={nameE}
                                    onChange={handleChange}                                
                                />
                                {errores.nameE && <Error>{errores.nameE}</Error> }                            
                                <Label htmlFor="cargoE">Cargo y Sección</Label>
                                <InputGeneral
                                    type="text"
                                    id="cargoE"
                                    name="cargoE"
                                    placeholder="Nombre*"
                                    value={cargoE}
                                    onChange={handleChange}                                                                
                                />                
                                {errores.cargoE && <Error>{errores.cargoE}</Error> }                            
                                <Label htmlFor="emailE">Email</Label>
                                <InputGeneral
                                    type="email"
                                    id="emailE"
                                    name="emailE"
                                    placeholder="Email*"
                                    value={emailE}
                                    onChange={handleChange}                                                                
                                />
                                {errores.emailE && <Error>{errores.emailE}</Error> }                            
                                <Label htmlFor="phoneE">Teléfono</Label>
                                <InputGeneral
                                    type="number"
                                    id="phoneE"
                                    name="phoneE"
                                    placeholder="Teléfono*"
                                    value={phoneE}
                                    onChange={handleChange}                                                                
                                />
                                {errores.phoneE && <Error>{errores.phoneE}</Error> }                            
                            </div>
                        </Contenido>  
                    </div>
                </section>                                                       
                <Send>
                    <InputSubmit
                        type="submit"
                        value="enviar"
                    />
                </Send>
            </form>
        </Section>
     );
}
 
export default FormPrensa;