import React from 'react';
import {Container,Himage,Hdropdown,Hlink,} from "../header/styles"

function Header() {
    return (
        <Container>
             
        <Himage src="/images/Tinder-logo1.png" alt="logo" />
        <Hdropdown>
            <button>Products</button>
            <div>
            <Hlink>Premuim Features</Hlink>
            <Hlink>Subsription Tiers</Hlink>
                <button>Tinder Plus </button>
                <button>Tinder Gold</button>
                <button>Tinder Platinum</button>
            <Hlink>Swipe Night</Hlink>
            </div>
        </Hdropdown>
        <Hlink href="/swipe">Learn</Hlink>
        <Hdropdown>
            <button>Safety</button>
            <div>
            <Hlink to="/">Community Guideline</Hlink>
            <Hlink to="/">Safety Tips</Hlink>
            <Hlink to ="/">Safety & Policy</Hlink>
            <Hlink to ="/">Safety & Reporting</Hlink>
            <Hlink to ="/">Security</Hlink>
            </div>
        </Hdropdown>
        <Hlink>Support</Hlink>
         <Hlink>Download</Hlink>
   
         <Language>
             <img src="images/globe-icon.svg" alt="globe" />
             <h2>ENGLISH</h2>
             <p>Language</p>
         </Language>
         <Button>Log In</Button>
    </Container>
   
    )
}

export default Header
