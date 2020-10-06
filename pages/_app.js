import App from 'next/app';
import firebase, {FirebaseContext} from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';
import '../styles/globals.css';

const MyApp = props => {

    const usuario = useAutenticacion();
    const {Component, pageProps} = props;

    return(
        <FirebaseContext.Provider
            value={{
                firebase,
                usuario
            }}
        >
            <Component {...pageProps} />
        </FirebaseContext.Provider>
    )
}

export default MyApp;

/*
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
*/