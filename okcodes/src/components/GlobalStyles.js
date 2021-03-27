import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html{
   font-size: 10px;
}

body{
    font-family: 'Mulish', sans-serif;
}


button{
    font-weight: bold;
    font-size: 1.65rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #006EE6;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    
    &:hover{
        background-color: #006EE6;
        color: white;
    }
}

h1{
font-size: 4.5rem;
font-weight: bold;

}
    h2{
        font-weight: bold;
        font-size: 2rem;
    }
   
    h4{
        font-weight: bold;
        font-size: 2rem;    
    }

    a{
        font-size: 1.1rem;
    }
    
    span{
        font-weight: bold;
        color:#006EE6;
    }
    
    p{
        padding: 3rem 0rem;
        color: #202020;
        font-size: 1.4rem;
        line-height: 150%;
    }

`;

export default GlobalStyles;
