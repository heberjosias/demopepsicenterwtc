import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';

const useEventos = orden => {

    const [eventos, guardarEventos] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const obtenerProductos = () => {
            firebase.db.collection('eventos').orderBy(orden, 'desc').onSnapshot(manejarSnapshot)
        }
        obtenerProductos();
    }, []);

    function manejarSnapshot(snapshot) {
        const eventos = snapshot.docs.map(doc => {
            return {
            id: doc.id,
            ...doc.data()
            }
        });

        guardarEventos(eventos);
    }

    return {
        eventos
    }
}

export default useEventos;