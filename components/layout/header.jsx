import React, {useState} from "react";
import Link from 'next/link';

import {Menu, MenuMobile, NavMobile} from '../ui/layout';

const Header = () => {

    //apertura de menú móvil
    const [menu , setMenu] = useState(false);    
    const openMenu = () =>{
        setMenu(true);
    }
    return ( 
      <>
      <Menu>
        <Link href="/">
          <img src="/img/pcwtc.png" alt="PCWTC"/>
        </Link>
        <nav>    
          <Link href="/cartelera">
            <a>Cartelera</a>
          </Link>
          <Link href="/conoce">
            <a>Conoce PCWTC</a>
          </Link>          
          <Link href="/visita">
            <a>Planea Tu Visita</a>
          </Link>
          <Link href="/contrata">
            <a>Contrata PCWTC</a>
          </Link>          
          <Link href="/contacto">
            <a>Contacto</a>
          </Link>          
          <Link href="/newsletter">
            <a><span>Newsletter</span></a>
          </Link>
        </nav>
        <MenuMobile>
          <a href="#!" onClick={openMenu}>
            <img src="/icon/menu.svg" alt="Menu"/>
          </a>          
        </MenuMobile>
      </Menu>      
      { menu ? ( 
        <NavMobile>
          <div>
            <Link href="/">
              <img src="/img/pcwtc.png" alt="PCWTC"/>
            </Link>
            <nav>    
              <Link href="/cartelera">
                <a>Cartelera</a>
              </Link>
              <Link href="/conoce">
                <a>Conoce PCWTC</a>
              </Link>          
              <Link href="/visita">
                <a>Planea Tu Visita</a>
              </Link>
              <Link href="/contrata">
                <a>Contrata PCWTC</a>
              </Link>          
              <Link href="/contacto">
                <a>Contacto</a>
              </Link>          
              <Link href="/newsletter">
                <a><span>Newsletter</span></a>
              </Link>
            </nav>
            <p>
              <a href="https://www.facebook.com/gopepsicenterwtc/" target="blank">
                <img src="/icon/facebook.svg" alt="RSSS"/>
              </a>
              <a href="http://instagram.com/pepsicenterwtc" target="blank">
                <img src="/icon/instagram.svg" alt="RSSS"/>
              </a>              
              <a href="https://twitter.com/pepsicenterwtc" target="blank">
                <img src="/icon/twitter.svg" alt="RSSS" />
              </a>
              <a href="https://www.youtube.com/channel/UCkVoSTXU62sxsSohYPgClGg" target="blank">
                <img src="/icon/youtube.svg" alt="RSSS"/>
              </a>
              <a href="hhttps://open.spotify.com/user/pepsicenterwtc" target="blank">
                <img src="/icon/spotify.svg" alt="RSSS"/>
              </a>                                                        
            </p>
          </div>
        </NavMobile>           
      ) : null }      
      </>
      );
}
 
export default Header; 