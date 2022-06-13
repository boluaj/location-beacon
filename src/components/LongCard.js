import React from "react"
export default function LongCard(props){  
   
  
    return(
        <div>
          <div className="card mb-3 long-card mt-4 mb-4">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.image} className="long-card-img"/>
                </div>
                <div className="col-md-8 to-left">
                    <div className="card-body">
                        <h5 className="card-title smaller">{props.title}</h5>
                        <p className="card-text smaller"><span className="fw-bold">{props.place}</span>{props.placeDetails}</p>
                        <div className="row mt-4">
                            <div className="col-sm smaller">Distance: <span className="fw-bold">{props.distance}</span></div>
                            <div className="col-sm smaller">Est Time: <span className="fw-bold">{props.time}</span></div>
                            <div className="col-sm smaller">Transport Fair: <span className="fw-bold">#{props.transportFair}</span></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        )
}