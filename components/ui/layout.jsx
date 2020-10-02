import styled from '@emotion/styled';

export const Menu = styled.header`
    width: 95vw;
    margin: 0 auto;
    padding: 1em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 150px;
    }
    nav{
        display: flex;        
        gap: 1em;
        a{
            padding: 5px 10px;
            border: 2px solid transparent;
            transition: all 0.30s ease-out;
            &:active {
                border: 2px solid #059cee;
                border-radius: 5px;
            }
            &:hover{
                border: 2px solid #059cee;
                border-radius: 5px;
                transition: all 0.20s ease-out;
            }
        }
        span{
            color: #ff0060;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 900;
        }
        @media (max-width: 1025px) {
            display: none;
        }
    }

`;

export const MenuMobile = styled.div`
    img{
        width: 4em;
        padding: 0 1em;
    }
    @media (min-width: 1025px) {
        display: none;
    }    
`;

export const NavMobile = styled.div`
    margin: 0;
    padding: 0;
    background-image: linear-gradient(-260deg, #45a6de 0%, #1c3baf 52%, #381ba7 100%);
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 100;
    top:0vh;
    left:0vh;    
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    img{
        width: 200px;
    }    
    nav{
        padding: 2em 0;
        display: grid;     
        gap: 1.4em;
        a{
            font-size: 1.8em;
            padding: 5px 10px;
            border: 2px solid transparent;
            transition: all 0.30s ease-out;
            &:active {
                border: 2px solid #059cee;
                border-radius: 5px;
            }
        }
        span{
            color: #ff0060;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 900;
        }
    }
    p{
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            height: 2.5em;
            max-width: 5em;            
        }
    }
`;

export const FooterStyle = styled.footer`
    width: 90vw;
    margin: 0 auto;
    padding: 0 0 1em 0;
    display: grid;
    gap: 1em;
    align-items: center;
    text-align: center;
    p{
        img{
            @media (max-width: 1025px) {
                display: none;
            }
        }
    }
    section{
        text-transform: uppercase;
        font-size: .8em;
        p{
            margin:0;
        }
        a{
            color: #ff0060;
            font-weight: 600;
        }
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            height: 2em;
            max-width: 5em;            
        }
    }
    @media (min-width: 1025px) {
        width: 95vw;
        grid-template-columns: repeat(3,1fr);
    }    
`;
