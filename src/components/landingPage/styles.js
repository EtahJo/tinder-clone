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
  margin-top:-500px;
    h1{
        color:white;
        font-size: 100px;
        
    }

 `;
 export const Cards= styled.div`
  display:flex;

  justify-content:space-between;
  align-items:center;
  background-color:white;
  padding:30px 40px;
  margin:auto;
 `;
 export const Ccontainer= styled.div`
      display:flex;
      flex-direction:column;
      border:1px solid grey;
      width:40%;
      margin:10px;
      height: 400px;
      padding:10px;
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
 export const Fcontainer1= styled.div`
   display:flex;
   flex-direction:column;
   background-color:white;
 `;
 export const Fcontainer=styled.div`
  display:flex;
  margin-left:40px;
  margin-right:40px;
  border-bottom: 1px solid gray;
  justify-content:flex-start;
  width:95%;
  div{
     display:flex;
     flex-direction:column;
     padding-right:30px;
     width:15%;
     
     h2{
        font-size:20px;
        font-weight:bold;
        padding-bottom:5px;
        color:black;
     }
     p{
        color:gray;
        padding-bottom:1px;
        &:hover{
           color:red;
        }
     }
     
     h3{
        font-weight:normal;
        &:hover{
           color:red;
        }
     }
  }
  ul{
         display:flex;
         justify-content:;
         padding:0;
         list-style-type:none;
         width:150px;
         flex-wrap:wrap;
       
         
   li{
      padding:2px 5px 0px 5px;
      i{
        color:black;
        font-size:30px;
       
        &:hover{
           color:red;
        }
     }
   }
   }
 `;
 export const Download = styled.div`
  display:flex;
  background-color:white;
  height:100%;
  justify-content:flex-start;
  padding:40px 30px ;
 
  button{
     display:flex; 
     background-color:black;
     justify-content:center;
     color:white;
     text-align:center;
     align-items:center;
     padding:25px;
     margin:10px;
     height:50px;
     width:170px;
     border-radius:5px;
     border:none;
     box-shadow:0px 0.5px 0.5px 0.5px  #888888;
     white-space:nowrap;
        p{
         display:flex;
         flex-direction:column;
         justify-content:center;
         padding-right:20px;
         text-align:center;
         padding-left:0px;
         
         small{
            color:grey;
            text-align:start;

         }
         strong{
            font-size:20px;

         }
        

     }
     i{
            font-size:30px;
            align-items:center;
            padding-right:5px;
            
            
      }
     img{
        display:flex;
        justify-content:flex-end;
        width:70px;
        padding-left:0;
        padding-right:0;
        margin-right:-20px !important;
        float:right;
     

     }
    
     
  }
 `