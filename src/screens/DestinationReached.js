import React from "react"
import logo from '../assets/images/logo.png'
import InputField from "../components/InputField"
import BaseButton from "../components/BaseButton"

export default function  DestinationReached(props){  
    return(
        <div class="background">
           
                <nav className="push">
                    <div class="logo mt-4">
                        <img src={logo}/>
                    </div>
                </nav>
           
            <div className="the-content">
               
                <div className="inner-container">
                <div class="card taller">
                <div class="card-body">
                <i class="fa fa-times close" aria-hidden="true"></i>
                    <center>
                        <h3 class="card-title">Destination reached</h3>
                        <p class="card-text">Would you like to enter another location?</p>
                        <BaseButton buttonText="Search Location"/>
                    </center>
                   
                </div>
                </div>
                </div>
               
            </div>
            
        </div>
        )
}