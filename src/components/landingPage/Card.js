import React from 'react';
import { Ccontainer} from "./styles"

function Card({names,story}) {
    return (
       <Ccontainer>
           <div>
           <h2>Gabriel & Fiance</h2>
           <img src="images/quote-left-solid.svg" alt="" />
           </div>
          
           <p>I met my  fiance on tinder during the quaratine 

           </p>
       </Ccontainer>
    )
}

export default Card
