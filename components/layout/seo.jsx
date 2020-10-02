import React from 'react';
import Head from 'next/head';

const SEO = ({Title}) => {
    return ( 
        <Head>
                <title>{Title} - Pepsi Center WTC</title>
                <html lang="es"/>
                <meta name="description" content="Pepsi Center WTC"/>
                <meta name="keywords" content="PCWTC, Pepsi Center WTC, Pepsi Center, WTC, Conciertos, Shows, En vivo"/>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,900;1,300;1,400&display=swap" rel="stylesheet"/>
        </Head>
     );
}
 
export default SEO;