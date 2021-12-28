import React from 'react';
import {Fcontainer,Download, Fcontainer1} from "./styles";

function Footer() {
    return (
        <Fcontainer1>
        <Fcontainer>
            <div>
                <h2>LEGAL</h2>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Cookie Policy</p>
                <p>Intellectual Property</p>
            </div>
            <div>
                <h2>CAREERS</h2>
                <p>Careers Portal</p>
                <p>Tech Blog</p>
            </div>
            <div>
            <h2>SOCIAL</h2>
            <ul>
                <li><i class="fab  fa-instagram" /> </li>
                <li><i class="fab  fa-tiktok" /> </li>
                <li><i class="fab  fa-youtube" /> </li>
                <li><i class="fab  fa-twitter" /> </li>
                <li><i class="fab  fa-facebook" /> </li>
            </ul>
            </div>
           
            <div>
                <h3>FAQ</h3>
                <p>Destinations</p>
                <p>Press Room</p>
                <p>Contact</p>
                <p>Promo Code</p>
            </div>
       
            </Fcontainer>
             <Download>
             <h1>GET THE APP!</h1>
             <button>
             <i class="fab  fa-apple" />
                 <p>
                     <small>Download on the</small>
                     <strong>App Store</strong>
                </p>
             </button>
             <button>
             <img src="/images/Google_Play-Icon-Logo.svg" alt="" />
        
                 <p>
                     <small>GET IT ON</small>
                     <strong>Google Play</strong>
                 </p>
            
            
             </button>
            </Download>
            </Fcontainer1>
    )
}

export default Footer
