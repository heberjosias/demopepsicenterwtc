import Router from 'next/router';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import firebaseConfig from './config';

class Firebase {

    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)
            //app.analytics();
        }
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }

    // Registra un usuario
    async registrar(name, email, password) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

        return await nuevoUsuario.user.updateProfile({
            displayName : name
        })
    }

    // Inicia sesión del usuario
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    } 

    // Cierra la sesión del usuario
    async cerrarSesion() {
        await this.auth.signOut();
        Router.push('/');
    }    

}

const firebase = new Firebase();
export default firebase;