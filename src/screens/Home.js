import {React, useState} from "react"
import logo from '../assets/images/logo.png'
import InputField from "../components/InputField"
import BaseButton from "../components/BaseButton"
import searchstuff from '../assets/images/searchstuff.png'
import { Link } from 'react-router-dom';
export default function Home(props){  
    const [formText, setformText] = useState({
        location: " ",
        destination: " ",
      });
    const [showLocationMethod, setShowLocationMethod] = useState("dont-show")
    const [showDestinationMethod, setDestinationMethod] = useState("dont-show")

      const handleChange = (event) => {
        setformText({ ...formText, [event.target.name]: event.target.value });
      };
    

      const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(formText);
      };

      const touchLocation = (event) => {
        setShowLocationMethod("show")
      }
      const touchDestination = (event) => {
        setDestinationMethod("show")
      }
    return(
        <div class="background">
           
                <nav className="push">
                    <div class="logo mt-4">
                        <img src={logo}/>
                    </div>
                </nav>
           
            <div className="the-content2">
                <h2 className="text-white text-center underr mb-4">Your mobile friendly buddy for getting around the city</h2>
                <div className="inner-container">
                <div className="row">
                                <div className="col-sm-1 mt-6 search-stuff">
                                    <img src={searchstuff}/>
                                </div>
                                <div className="col-lg-11 mt-3">
                                <form onSubmit={handleSubmit}>
                                    <label className="form-label fw-bold text-white">Enter Location</label>
                                    <InputField 
                                    title="Enter Location"
                                     inputType="text" formPlaceHolder="Enter location" value={formText.location} onChange={handleChange} onClick={touchLocation} name="location"/>
                                        <div className={showLocationMethod}>
                                        <div class="d-flex flex-row mb-2 under-border">
                                            <div className="p-2">
                                                <i className="fa fa-map-marker text-white fs-5" aria-hidden="true"></i>
                                            </div>
                                            <div className="p-2">
                                                <p className="text-white mm">Use Current Location</p>
                                                <p className="text-white fw-light fs-6 mm">Stadium roundabout, Calabar, Nigeria</p>
                                            </div>   
                                        </div>
                                        <div class="d-flex flex-row mb-2 ">
                                            <div className="p-2">
                                                <i className="fa fa-location-arrow text-white fs-6" aria-hidden="true"></i>
                                            </div>
                                            <div className="p-2">
                                                <p className="text-white mm">Enter Address Manually</p>
                                                <p className="text-white fw-light fs-6 mm">Enter address</p>
                                            </div>   
                                        </div>
                                        </div>
                                    <label className="form-label fw-bold text-white">Enter Destination</label>
                                    <InputField 
                                    title="Enter Destination"
                                     inputType="text" formPlaceHolder="Enter destination" value={formText.destination} onChange={handleChange} onClick={touchDestination} name="destination"/>
                                        <div className={showDestinationMethod}>
                                            <div className="under-border mb-2">
                                                <p className="text-white fw-light fs-6">University of Calabar</p>
                                            </div> 
                                            <div className="under-border mb-2">
                                                <p className="text-white fw-light fs-6">University of Calabar Teaching Hospital</p>
                                            </div>  
                                        </div>
                                        <Link to="/direction-guide">
                                          <BaseButton buttonText="Get Started"/>
                                        </Link>
                                    
                                </form>
                           
                                    </div>
                                </div>
                            </div>
            </div>  
        </div>
        )
}