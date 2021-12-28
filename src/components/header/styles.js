import styled from "styled-components/macro";

export const Container = styled.div`
    display:flex;
    background: linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0)),url("images/background-image.jpg") ;
    background-repeat: no-repeat,repeat;
    background-size:100% 100%;
    color:white;
    justify-content: space-around;
    align-items:flex-start;
    height:900px;
    padding-left:10px;
    padding-top:20px;
    z-index:0;
    position:sticky;
    top:0px;
    width:100%;
   
    
`;

export const Himage = styled.img`
    max-width:15%;
    object-fit:contain;

`;

export const Htable = styled.ul`

`;

export const Language = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding-left:40px;
&:hover{
    color:red;
    p{
        display:flex;
        justify-content:center;
    }

}

 img{
     object-fit:contain;
     width:30px;
     height:20px;
     path{
         fill:#000;
     }
 }
 h2{
     font-size:16px;
     font-weight:normal;

 }
 p{
    position: absolute;
    top:75px;
    color:black;
    border:1px solid black;
    background: white;
    width:100px;
    height:30px;
    font-size:16px;
    transition-duration:167ms;
    text-align:center;
    margin:auto;
    align-items:center;
     display:none;
 }
`;
export const Button = styled.button`
 color:red;
 font-size:20px;
 background-color:white;
 border:none;
 border-radius:5px;
 font-weight:bold;
 width:90px;
 height:40px;
`;
export const Hdropdown = styled.div`
    position: relative;
   div{
    position: absolute;
    left:0;
    margin-top:0;
    background-color:transparent;
    opacity:0;
    display:flex;
    flex-direction:column;
    width:300px;
    &:hover{
        opacity:1;

        a{
            text-decoration:none;
            font-size:20px;
        }
        button{
            text-decoration:none;
            font-size:20px;
        }
    }
   
    
    a{
        padding:4px;
        font-size:20px;

    }
    button{
        text-align:start;
        padding-left:40px;
    }
   }
   button{
        background-color:transparent;
        border:none;
        color:white;
        font-size:20px;
        font-weight:bold;
        &:hover{
        color:red;
        text-decoration: underline;
        font-size:16px;
        text-decoration-thickness:3px;
        + div{
            opacity:1;
            text-decoration:none;
            color:white;
        }
    }
    
    }
`;

export const Hlink =styled.a`
 color:white;
 font-size: 20px;
 font-weight:bold;
 text-decoration: none;
  display: block;
  &:hover{
 
      color:red;
      font-size:16px;
      text-decoration: underline;
      text-decoration-thickness:3px;
  }

`;