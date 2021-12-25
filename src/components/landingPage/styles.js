import styled from "styled-components/macro";


export const Container = styled.div`
background-color:transparent;
position:relative;
height:100%;


`;

export const Top = styled.div`

  display:flex;
  flex-direction:column;
  text-align:center;
  padding-bottom:30px;
  z-index:200;
  margin-top:-100px;
    h1{
        color:white;
        font-size: 100px;
        
    }

 `;
 export const Cards= styled.div`
  background-color:white;
  padding:30px 40px;
 `;
 export const Ccontainer= styled.div`
      border:1px solid grey;
      width:250px;
      height: 400px;
      border-radius: 5px;
      box-shadow:0px 0.5px 0.5px 0.5px  #888888;
      div{
         display:flex;
         position:relative;
         img{
            object-fit:contain;
            width:50px;
            opacity:0.3;
            position:absolute;
            padding:5px;
            top:1px;
            right:7px;
            margin-left:5px;
         }
      }
      
      h2{
         font-size:20px;
         font-weight:bold;
         border-bottom: 1px solid grey;
         margin:10px;

      }
      p{
         color:grey;
         text-align:start;
         margin-left:10px;

      }
 `;

 export const Button= styled.button`
    background-image: linear-gradient(to right, rgb(253, 41, 123), rgb(255, 101, 91));
    height:50px;
    color:white;
    font-weight:300;
    border:none;
    font-size:20px;
    width:300px;
    border-radius:20px;
    margin:auto;
    margin-bottom:20px;
 `;