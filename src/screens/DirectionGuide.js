import React from "react"
import logo from '../assets/images/logo.png'
import BaseButton from "../components/BaseButton"
import img from '../assets/images/card-img.png';
import LongCard from "../components/LongCard"
import { Tabs, Tab } from "react-bootstrap"
import Card from "../components/Card";
import InputField from "../components/InputField";
import smallimg from '../assets/images/img-2.png'
import { placeData } from "../data";
import searchstuff from '../assets/images/searchstuff.png'
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"


export default function DirectionGuide(props){  
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 900, min: 900 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        }
      };
    return(
        <div>
           
               
                 
               
                <nav className="dark-bg">
                    <div className="logo mt-4">
                        <img src={logo}/>
                    </div>
                </nav>

                <div className="row activities">
                    <div className="col-lg-4">
                        <div className="search-card">
                        <div class="card">
                            <div class="card-body make-dark">
                            <div className="row">
                                <div className="col-sm-1 mt-6 search-stuff">
                                    <img src={searchstuff}/>
                                </div>
                                <div className="col-lg-11">
                                <label className="form-label fw-bold text-white">Enter Location</label>
                            <InputField title="Enter Location" inputType="text" formPlaceHolder="Stadium roundabout Calabar"/>  
                            <label className="form-label fw-bold text-white">Enter Destination</label>
                            <InputField title="Enter Destination" inputType="text" formPlaceHolder=" Unical main gate Calabar"/>
                            </div>
                            </div>
                            
                            </div>
                            <div class="card-footer">
                            <div class="d-flex flex-row mb-3">
                            <div class="pl">
                                <p> <b>35 mins</b> (3km)</p>
                            </div>
                            <div class="pl">
                                <p><i class="fas fa-building pr"></i>#500</p>
                            </div>
                            <div class="pl">
                                <p><i className="fa fa-share-alt pr"></i>Share</p>
                            </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                    <Tabs defaultActiveKey="DirectionGuide" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="DirectionGuide" title="Direction Guide">
                        <Link to="/destination-reached">
                             <LongCard image={img} place="UJ Esuene stadium junction." title="Current Location" placeDetails="This junction is between Murtala Mohammed way and calabar Ikang road." distance="500m" time="5min" transportFair="200"/>
                        </Link>
                          
                           <h6>Notable place near  UJ Esuene Stadium Junction</h6>
                           <div class="row mb-3">
                           <Carousel responsive={responsive} autoPlay={false}>
                           {placeData.map((data, key) => {
                                return (
                                   
                                    <div key={key} className="col-md-4 padding-0">
                                        
                                        <Card place={data.place} key={key} distance={data.distance} placeType={data.placeType} image={data.image}
                                        />
                                       
                                    </div>
                                    
                                );
                                })}

                            </Carousel>
                                
                           
                            </div>
                            <LongCard image={img} place="UJ Esuene stadium junction." title="Current Location" placeDetails="This junction is between Murtala Mohammed way and calabar Ikang road." distance="500m" time="5min" transportFair="200"/>
                           <h6>Notable place near  UJ Esuene Stadium Junction</h6>
                           <div class="row mb-3">
                            
                           <Carousel responsive={responsive} autoPlay={false}>
                           {placeData.map((data, key) => {
                                return (
                                   
                                    <div key={key} className="col-md-4 padding-0">
                                        
                                        <Card place={data.place} key={key} distance={data.distance} placeType={data.placeType} image={data.image}
                                        />
                                       
                                    </div>
                                    
                                );
                                })}

                            </Carousel>
                            </div>
            
                            <LongCard image={img} place="UJ Esuene stadium junction." title="Final Destination" placeDetails="This junction is between Murtala Mohammed way and calabar Ikang road." distance="500m" time="5min" transportFair="200"/>
                           <h6>Notable place near  UJ Esuene Stadium Junction</h6>
                           <div class="drow mb-3">
                           <Carousel responsive={responsive} autoPlay={false}>
                           {placeData.map((data, key) => {
                                return (
                                   
                                    <div key={key} className="col-md-4 padding-0">
                                        
                                        <Card place={data.place} key={key} distance={data.distance} placeType={data.placeType} image={data.image}
                                        />
                                       
                                    </div>
                                    
                                );
                                })}

                            </Carousel>
                            </div>
                        </Tab>
                        <Tab eventKey="MapView" title="Map View">
                            <h2>Map View</h2>
                        </Tab>
                    </Tabs>
                    </div>
                </div>
               
            
        </div>
        )
}
