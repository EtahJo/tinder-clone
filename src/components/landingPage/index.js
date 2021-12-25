import React from 'react'
import Header from '../header/Index';
import Card from './Card';
import {Container ,Top , Button, Cards} from "./styles"

function LandingPage() {
    return (
        <div>
            <Container>
                <Top>
                    <h1>Swipe Right</h1>
                    <Button> CREATE ACCOUNT</Button>
                </Top>  
                    <Cards>
                    <Card/>   
                    </Cards>
                     
            </Container>
           
            
        </div>
    )
}

export default LandingPage
