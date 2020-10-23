import React,{useState, useContext} from 'react';
import Router, {useRouter} from 'next/router';
import styled from '@emotion/styled';

import { Label, InputGeneral, CheckGeneral, CheckLabel, Error} from '../ui/form';
import {InputSubmit} from '../ui/btn';

import {FirebaseContext} from '../../firebase';
import useValidacion from '../../hooks/useValidacion';
import validarNewsletter from '../../validacion/validarNewsletter';

const Section = styled.div`
    background-image: linear-gradient(-260deg, rgba(4,27,49,.4) 32%, rgba(24,48,82,.4) 48%, rgba(4,27,49,.4) 80%);     
    padding: 2em;
    @media (min-width: 1025px) {        
        padding: 3em;
    }   
    form{    
        section{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: .5em;
            @media (min-width: 768px) {        
                gap: 1em;
            } 
        }    
    }
`;

const Checked = styled.div`
    padding: 2em 1em 0 1em;
    display: grid;
    @media (min-width: 768px) {        
        grid-template-columns: repeat(2, 1fr);
    } 
    p{
        margin:0;
    }
`;

const Send = styled.div`
    margin: 2em 0 0 0;
    text-align: center;
`;

const STATE_INICIAL = {
    name: '',
    email:'',
    phone:'',
    electronica:'',
    hiphop:'',
    metal:'',
    oldies:'',
    pop:'',
    reggaeton:'',
    ritmoslatinos:'',
    rock:'',
    standup: '',
    youtubers:'',
  }

const FormNewsletter = () => {

    const [error, guardarError] = useState(false);
    const {valores, errores, handleChange, handleSubmit} = useValidacion(STATE_INICIAL, validarNewsletter, crearNewsletter);
    const { name, email, phone, electronica, hiphop, metal, oldies, pop, reggaeton, ritmoslatinos, rock, standup, youtubers } = valores;    

    const router = useRouter();
    const { firebase } = useContext(FirebaseContext);

    async function crearNewsletter() {
        console.log('Creando Newsletter...');    
        const data = {
            name,
            email,
            phone,
            electronica,
            hiphop,
            metal,
            oldies,
            pop,
            reggaeton,
            ritmoslatinos,
            rock,
            standup,
            youtubers,
            creado: Date.now(), 
          }
        let refData = 'newsletter';   
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
                    <Label htmlFor="name">Nombre</Label>
                    <InputGeneral
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nombre"
                        value={name}
                        onChange={handleChange}
                    />
                    {errores.name && <Error>{errores.name}</Error> }
                    <Label htmlFor="email">Email</Label>
                    <InputGeneral
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}                        
                    />
                    {errores.email && <Error>{errores.email}</Error> }
                    <Label htmlFor="phone">Teléfono</Label>
                    <InputGeneral
                        type="number"
                        id="phone"
                        name="phone"
                        placeholder="Teléfono"
                        value={phone}
                        onChange={handleChange}                        
                    />
                    {errores.phone && <Error>{errores.phone}</Error> }
                </section>
                <Checked>
                    <p>
                        <CheckGeneral 
                            type="checkbox" 
                            id="electronica" 
                            value={electronica}
                            onChange={handleChange}
                        />                                   
                        <CheckLabel htmlFor="electronica">Electrónica</CheckLabel>
                    </p>
                    <p>
                        <CheckGeneral 
                            type="checkbox" 
                            id="hiphop" 
                            value={hiphop}
                            onChange={handleChange}
                        />                                   
                        <CheckLabel htmlFor="hiphop">Hip Hop</CheckLabel>
                    </p>
                    <p>
                        <CheckGeneral 
                            type="checkbox" 
                            id="metal" 
                            value={metal}
                            onChange={handleChange}
                        />                                   
                        <CheckLabel htmlFor="metal">Metal</CheckLabel>
                    </p>                                        
                    <p>
                        <CheckGeneral 
                            type="checkbox" 
                            id="oldies" 
                            value={oldies}
                            onChange={handleChange}
                        />                                   
                        <CheckLabel htmlFor="oldies">Oldies</CheckLabel>
                    </p>                                                       
                    <p>
                        <CheckGeneral 
                            type="checkbox" 
                            id="pop" 
                            value={pop}
                            onChange={handleChange}
                        />                                   
                        <CheckLabel htmlFor="pop">Pop</CheckLabel>
                    </p>                 
                    <p>
                        <CheckGeneral 
                            type="checkbox" 
                            id="reggaeton" 
                            value={reggaeton}
                            onChange={handleChange}
                        />                                   
                        <CheckLabel htmlFor="reggaeton">Reggaeton</CheckLabel>
                    </p>                   
                    <p>
                        <CheckGeneral 
                            type="checkbox" 
                            id="ritmoslatinos" 
                            value={ritmoslatinos}
                            onChange={handleChange}
                        />                                   
                        <CheckLabel htmlFor="ritmoslatinos">Ritmos Latinos</CheckLabel>
                    </p>                  
                    <p>
                        <CheckGeneral 
                            type="checkbox" 
                            id="rock" 
                            value={rock}
                            onChange={handleChange}
                        />                                   
                        <CheckLabel htmlFor="rock">Rock</CheckLabel>
                    </p>   
                    <p>
                        <CheckGeneral 
                            type="checkbox" 
                            id="rock" 
                            value={standup}
                            onChange={handleChange}
                        />                                   
                        <CheckLabel htmlFor="rock">Stand Up</CheckLabel>
                    </p>                                                                     
                    <p>
                        <CheckGeneral 
                            type="checkbox" 
                            id="youtubers" 
                            value={youtubers}
                            onChange={handleChange}
                        />                                   
                        <CheckLabel htmlFor="youtubers">YouTubers</CheckLabel>
                    </p>                                                                                                                                                                
                </Checked>
                {error && <Error>{error}</Error>}                
                <Send>
                    <InputSubmit
                        type="submit"
                        value="Enviar"
                    />
                </Send>                              
            </form>              
        </Section>
     );
}
 
export default FormNewsletter;