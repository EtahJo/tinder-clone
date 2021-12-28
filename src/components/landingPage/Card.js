import React from 'react';
import { Ccontainer} from "./styles"

function Card({names,story,key}) {
    return (
       <Ccontainer>
           <div>
           <h2>{names}</h2>
           <img src="images/quote-left-solid.svg" alt="" />
           </div>
          
           <p>{story}</p>
       </Ccontainer>
    )
}

export default Card
