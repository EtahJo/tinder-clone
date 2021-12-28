import styled from "styled-components/macro";


export const Container = styled.div`
 display:flex;
 flex-direction: column;
 
 padding:10px;
 margin:auto;
 align-items:center;
 justify-content:center;
 width:60%;
`;

export const Header = styled.div`
 display:flex;
 margin:auto;
 width:100%;
 justify-content:space-evenly;
 padding:0 20px;

 i{
     font-size:30px;
     &:first-child{
     color:rgb(253, 41, 123);
    
 }
 &:nth-child(2),&:nth-child(4){
     color: grey;
     border:2px solid grey;
     border-radius:50%;
     overflow:hidden;
     &:hover{
         color:black;
         border:2px solid black;

     }
 }
 &:nth-child(3){
     color:grey;
   
 }
 &:hover{
     color:black;
 }
 }
`;

export const Image= styled.div`
display:flex;
justify-content:center;
position:relative;
margin-top:5vh;
.swipe{
   position:absolute;
    div{
        background-size:cover;
        background-position:center;
        position:relative;
        width:600px;
        height:600px;
        border-radius:20px;
        h1,p,i{
            position:absolute;
            bottom:0;
        
        }
        h1{
            color:white;
            padding-left:10px;
        }
       div{
           display:flex;
           overflow:hidden;
           margin:auto;
           position:relative;
           align-items:center;
           padding-top:10px;
           padding-left:10px;
          i{
             
              color:red;
              
              
          }
          i:before{
              font-size:25px;
              
              left: 0;
              position: absolute;
              top: -36px;
          }
          p{
              color:white;
              padding-left:20px;
          }
        

    }
}`;
export const Imagein= styled.div`


`;
export const Footer= styled.div`
 display:flex;
 position:fixed;
 width:100%;
 justify-content:space-around;
 bottom:10vh;
 button{
     background-color:transparent;
     border:none;

    
     font-size:30px;
     box-shadow: 0px 10px 53px 0px rgba(0,0,0,0.3) !important;
     padding:10px;
     border-radius:50%;
     &:first-child{
         color:yellow;
     }
     &:nth-child(2){
         color:red;
     }
     &:nth-child(3){
         color:blue;
     }
     &:nth-child(4){
         color:green;
     }
     &:nth-child(5){
         color:purple;
     }
     &:hover{
         color:rgb(253, 41, 123);
     }
 
 }
 
`;