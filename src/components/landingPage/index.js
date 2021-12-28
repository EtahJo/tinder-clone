import React from 'react'
import Header from '../header/Index';
import Card from './Card';
import Successes from "../fixtures/successes.json";
import {Container ,Top , Button, Cards} from "./styles"
import Footer from './Footer';

function LandingPage() {
    return (
        <div>
            <Container>
                <Top>
                    <h1>Swipe Right</h1>
                    <Button> CREATE ACCOUNT</Button>
                </Top>  
                <Cards>
                        {Successes.map((success)=>(
                              
                             <Card
                             key={success.id}
                             names={success.names}
                             story={success.story}
                             /> 
                            
                        ))}
                    
                </Cards>
                <Footer/>
                     
            </Container>
           
            
        </div>
    )
}

export default LandingPage
