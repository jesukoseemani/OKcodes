import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html{
   font-size: 10px;
    &::-webkit-scrollbar{
            width: .7rem;
        }
    &::-webkit-scrollbar-thumb{
            background-color: #006EE6;
        }
    &::-webkit-scrollbar-track {
    background: white;
        }
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
@media (max-width: 1050px){
    font-size: 3.5rem;

    }

}
    h2{
        font-weight: bold;
        font-size: 2rem;
     
    }
   
    h4{
        font-weight: bold;
        font-size: 2rem;
        @media (max-width: 1050px){
          font-size: 1.8rem;

    }    
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
        @media (max-width: 1050px){
           font-size: .65rem;

    }
    }

`;

export default GlobalStyles;
