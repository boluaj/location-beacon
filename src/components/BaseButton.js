import React from "react"
export default function BaseButton(props){  
    return(
        <div>
           <center>
           <button className="btn btn-warning text-white fw-bold button">
                {props.buttonText}
                <i className="fas fa-search icon"></i>
           </button>
           </center> 
        </div>
        )
}