import React,{useState, useContext} from 'react';
import Router, {useRouter} from 'next/router';
import styled from '@emotion/styled';

import { Label, LabelGeneral, InputAdmin, TextAreaAdmin, Error} from '../ui/form';
import {InputSubmit} from '../ui/btn';

import {FirebaseContext} from '../../firebase';
import useValidacion from '../../hooks/useValidacion';
import validarEvento from '../../validacion/validarEvento';

const Section = styled.div`
    margin: 0 auto;
    @media (min-width: 1025px) {        
        width: 50%;
        padding: 3em 0;
    }   
    form{        
        section{
            background-image: linear-gradient(-260deg, rgba(4,27,49,.4) 32%, rgba(24,48,82,.4) 48%, rgba(4,27,49,.4) 80%);     
            padding: 1em;
            margin: 1em 0 2em 0;
            display: grid;
            gap: 1em;
        }
    }
`;

const Columns2 = styled.section`
    @media (min-width: 1024px) {        
        grid-template-columns: repeat(2, 1fr);    
    }   
`;

const Columns3 = styled.section`
    @media (min-width: 1024px) {        
        grid-template-columns: repeat(3, 1fr);    
    }   
`;

const Columns4 = styled.section`
    @media (min-width: 1024px) {        
        grid-template-columns: repeat(4, 1fr);    
    }   
`;

const Elemento = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .5em;
    @media (min-width: 768px) {        
        gap: 1em;
    } 
`;

const STATE_INICIAL = {
    name:'',
    fecha:'',
    conteo:'',
    desc:'',
    tour:'',
    utm:'',
    googlecalendar:'',
    playlist:'',
    seccion1:'',
    costo1:'',
    seccion2:'',
    costo2:'',
    seccion3:'',
    costo3:'',
    seccion4:'',
    costo4:'',
    seccion5:'',
    costo5:'',
    seccion6:'',
    costo6:'',
    seccion7:'',
    costo7:'',
    seccion8:'',
    costo8:'',
    horario: '',
    objetos: '',
    imgCartelera:'',
    imgEvento:'',
    imgConfiguracion:'',
    slug:'',
  }

const FormEvento = () => {

    // state img 1
    const [nombreimagen, guardarNombre] = useState('');
    const [subiendo, guardarSubiendo] = useState(false);
    const [ progreso, guardarProgreso ] = useState(0);
    const [urlimagen, guardarUrlImagen] = useState('');

    const [error, guardarError] = useState(false);
    const {valores, errores, handleChange, handleSubmit} = useValidacion(STATE_INICIAL, validarEvento, crearEvento);
    const { name, fecha, conteo, desc, tour, utm, googlecalendar, playlist, seccion1, costo1, seccion2, costo2, seccion3, costo3, seccion4, costo4, seccion5, costo5, seccion6, costo6, seccion7, costo7, seccion8, costo8, horario, objetos, imgEvento, imgCartelera, imgConfiguracion, slug } = valores;    

    const router = useRouter();
    const { firebase } = useContext(FirebaseContext);

    async function crearEvento() {
        console.log('Creando Evento...');    
        const data = {
            name, fecha, conteo, desc, tour, utm, googlecalendar, playlist, seccion1, costo1, seccion2, costo2, seccion3, costo3, seccion4, costo4, seccion5, costo5, seccion6, costo6, seccion7, costo7, seccion8, costo8, horario, objetos, imgEvento, imgCartelera, imgConfiguracion, slug,         
            creado: Date.now()
          }
        let refData = 'eventos';   
        // insertarlo en bdd
        firebase.db.collection('eventos').doc(slug).set(data);
        return router.push('/');
    }

    return ( 
        <Section>
            <form
                onSubmit={handleSubmit}
                noValidate
            >
                <h3>Datos principales</h3>
                <Columns3>
                    <Elemento>
                        <LabelGeneral htmlFor="name">Nombre*</LabelGeneral>
                        <InputAdmin
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Evento*"
                            value={name}
                            onChange={handleChange}
                        />
                        {errores.name && <Error>{errores.name}</Error> }
                    </Elemento>
                    <Elemento>
                        <LabelGeneral htmlFor="fecha">Fecha*</LabelGeneral>
                        <InputAdmin
                            type="text"
                            id="fecha"
                            name="fecha"
                            placeholder="20 Diciembre*"
                            value={fecha}
                            onChange={handleChange}
                        />
                        {errores.fecha && <Error>{errores.fecha}</Error> }
                    </Elemento>
                    <Elemento>
                        <LabelGeneral htmlFor="conteo">Fecha Conteo*</LabelGeneral>
                        <InputAdmin
                            type="date"
                            id="conteo"
                            name="conteo"
                            value={conteo}
                            onChange={handleChange}
                        />
                        {errores.conteo && <Error>{errores.conteo}</Error> }
                    </Elemento>
                </Columns3>     
                <h3>Descripción</h3>
                <Columns2>
                    <Elemento> 
                        <Label htmlFor="desc">Descripción*</Label>
                        <TextAreaAdmin                
                            id="desc"
                            name="desc"
                            rows="4"
                            value={desc}
                            onChange={handleChange}
                        />
                        {errores.desc && <Error>{errores.desc}</Error> }
                    </Elemento>
                </Columns2>
                <h3>Imágenes</h3>
                <Columns2>
                    <Elemento>                   
                    </Elemento>            
                </Columns2>
                <h3>URL's</h3>
                <Columns3>
                    <Elemento>
                        <LabelGeneral htmlFor="tour">Tour 360º</LabelGeneral>
                        <InputAdmin
                            type="text"
                            id="tour"
                            name="tour"
                            placeholder="url"
                            value={tour}
                            onChange={handleChange}
                        />    
                    </Elemento>     
                    <Elemento>                                        
                        <LabelGeneral htmlFor="utm">Ticketmaster*</LabelGeneral>
                        <InputAdmin
                            type="text"
                            id="utm"
                            name="utm"
                            placeholder="UTM*"
                            value={utm}
                            onChange={handleChange}
                        />  
                        {errores.utm && <Error>{errores.utm}</Error> }  
                    </Elemento>    
                    <Elemento>           
                        <LabelGeneral htmlFor="playlist">Playlist</LabelGeneral>
                        <InputAdmin
                            type="text"
                            id="playlist"
                            name="playlist"
                            placeholder="Playlist"
                            value={playlist}
                            onChange={handleChange}
                        />
                    </Elemento>
                </Columns3>
                <h3>Costos</h3>
                <Columns4>
                    <Elemento>
                        <LabelGeneral htmlFor="seccion1">Sección 1</LabelGeneral>
                        <InputAdmin
                            type="text"
                            id="seccion1"
                            name="seccion1"
                            placeholder="Sección"
                            value={seccion1}
                            onChange={handleChange}
                        />    
                    </Elemento>     
                    <Elemento>                                        
                        <LabelGeneral htmlFor="costo1">Costo 1</LabelGeneral>
                        <InputAdmin
                            type="number"
                            id="costo1"
                            name="costo1"
                            placeholder="600"
                            value={costo1}
                            onChange={handleChange}
                        />    
                    </Elemento>    
                    <Elemento>
                        <LabelGeneral htmlFor="seccion2">Sección 2</LabelGeneral>
                        <InputAdmin
                            type="text"
                            id="seccion2"
                            name="seccion2"
                            placeholder="Sección"
                            value={seccion2}
                            onChange={handleChange}
                        />    
                    </Elemento>     
                    <Elemento>                                        
                        <LabelGeneral htmlFor="costo2">Costo 2</LabelGeneral>
                        <InputAdmin
                            type="number"
                            id="costo2"
                            name="costo2"
                            placeholder="600"
                            value={costo2}
                            onChange={handleChange}
                        />    
                    </Elemento>   
                    <Elemento>
                        <LabelGeneral htmlFor="seccion3">Sección 3</LabelGeneral>
                        <InputAdmin
                            type="text"
                            id="seccion3"
                            name="seccion3"
                            placeholder="Sección"
                            value={seccion3}
                            onChange={handleChange}
                        />    
                    </Elemento>     
                    <Elemento>                                        
                        <LabelGeneral htmlFor="costo3">Costo 3</LabelGeneral>
                        <InputAdmin
                            type="number"
                            id="costo3"
                            name="costo3"
                            placeholder="600"
                            value={costo3}
                            onChange={handleChange}
                        />    
                    </Elemento>   
                    <Elemento>
                        <LabelGeneral htmlFor="seccion4">Sección 4</LabelGeneral>
                        <InputAdmin
                            type="text"
                            id="seccion4"
                            name="seccion4"
                            placeholder="Sección"
                            value={seccion4}
                            onChange={handleChange}
                        />    
                    </Elemento>     
                    <Elemento>                                        
                        <LabelGeneral htmlFor="costo4">Costo 4</LabelGeneral>
                        <InputAdmin
                            type="number"
                            id="costo4"
                            name="costo4"
                            placeholder="600"
                            value={costo4}
                            onChange={handleChange}
                        />    
                    </Elemento>   
                    <Elemento>
                        <LabelGeneral htmlFor="seccion5">Sección 5</LabelGeneral>
                        <InputAdmin
                            type="text"
                            id="seccion5"
                            name="seccion5"
                            placeholder="Sección"
                            value={seccion5}
                            onChange={handleChange}
                        />    
                    </Elemento>     
                    <Elemento>                                        
                        <LabelGeneral htmlFor="costo5">Costo 5</LabelGeneral>
                        <InputAdmin
                            type="number"
                            id="costo5"
                            name="costo5"
                            placeholder="600"
                            value={costo5}
                            onChange={handleChange}
                        />    
                    </Elemento>   
                    <Elemento>
                        <LabelGeneral htmlFor="seccion6">Sección 6</LabelGeneral>
                        <InputAdmin
                            type="text"
                            id="seccion6"
                            name="seccion6"
                            placeholder="Sección"
                            value={seccion6}
                            onChange={handleChange}
                        />    
                    </Elemento>     
                    <Elemento>                                        
                        <LabelGeneral htmlFor="costo6">Costo 6</LabelGeneral>
                        <InputAdmin
                            type="number"
                            id="costo6"
                            name="costo6"
                            placeholder="600"
                            value={costo6}
                            onChange={handleChange}
                        />    
                    </Elemento>   
                    <Elemento>
                        <LabelGeneral htmlFor="seccion7">Sección 7</LabelGeneral>
                        <InputAdmin
                            type="text"
                            id="seccion7"
                            name="seccion7"
                            placeholder="Sección"
                            value={seccion7}
                            onChange={handleChange}
                        />    
                    </Elemento>     
                    <Elemento>                                        
                        <LabelGeneral htmlFor="costo7">Costo 7</LabelGeneral>
                        <InputAdmin
                            type="number"
                            id="costo7"
                            name="costo7"
                            placeholder="600"
                            value={costo7}
                            onChange={handleChange}
                        />    
                    </Elemento> 
                    <Elemento>
                        <LabelGeneral htmlFor="seccion8">Sección 8</LabelGeneral>
                        <InputAdmin
                            type="text"
                            id="seccion8"
                            name="seccion8"
                            placeholder="Sección"
                            value={seccion8}
                            onChange={handleChange}
                        />    
                    </Elemento>     
                    <Elemento>                                        
                        <LabelGeneral htmlFor="costo8">Costo 8</LabelGeneral>
                        <InputAdmin
                            type="number"
                            id="costo8"
                            name="costo8"
                            placeholder="600"
                            value={costo8}
                            onChange={handleChange}
                        />    
                    </Elemento>                                                                                                                           
                </Columns4>           
                <h3>Datos Importantes</h3>
                <Columns2>
                    <Elemento> 
                        <Label htmlFor="horario">Horario de Ingreso</Label>
                        <InputAdmin
                            type="text"
                            id="horario"
                            name="horario"
                            placeholder="Horario"
                            value={horario}
                            onChange={handleChange}
                        />
                    </Elemento>
                    <Elemento> 
                        <Label htmlFor="objetos">Objetos no Permitidos</Label>
                        <InputAdmin
                            type="text"
                            id="objetos"
                            name="objetos"
                            placeholder="Objetos"
                            value={objetos}
                            onChange={handleChange}
                        />
                    </Elemento>                       
                </Columns2>
                <h3>URL Final</h3>
                <Columns2>
                <Elemento> 
                        <Label htmlFor="googlecalendar">Google Calendar</Label>
                        <InputAdmin
                            type="text"
                            id="googlecalendar"
                            name="googlecalendar"
                            placeholder="Url Google Calendar*"
                            value={googlecalendar}
                            onChange={handleChange}
                        />
                        {errores.slug && <Error>{errores.slug}</Error> }
                    </Elemento>                  
                    <Elemento> 
                        <Label htmlFor="slug">Slug</Label>
                        <InputAdmin
                            type="text"
                            id="slug"
                            name="slug"
                            placeholder="Evento*"
                            value={slug}
                            onChange={handleChange}
                        />
                        {errores.slug && <Error>{errores.slug}</Error> }
                    </Elemento>                      
                </Columns2>
                {error && <Error>{error}</Error>}                                                  
                <InputSubmit
                    type="submit"
                    value="Guardar"
                />
            </form>
        </Section>
     );
}
 
export default FormEvento;
