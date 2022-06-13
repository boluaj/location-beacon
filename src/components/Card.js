import React from "react"
export default function Card(props){  
   
  
    return(
        <div>
          <div className="card mb- sm-card">     
                    <img src={props.image} className="card-img-top sm-card-img"/> 
                    <div className="card-body">
                        <h6 className="card-title smaller">{props.place}</h6>
                        <p className="card-text fw-bold smaller">{props.distance}</p>
                        <p className="card-text smaller">{props.placeType}</p>
                    </div>
                </div>
        </div>
        )
}