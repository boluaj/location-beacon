import React from "react"
export default function InputField(props){  
    return(
        <div>
           <input type={props.inputType}
                className="form-control input mb-4" 
                id={props.title} 
                placeholder={props.formPlaceHolder} 
                value={props.value} 
                onChange={props.onChange} 
                onClick={props.onClick}
                name={props.name}
            />
        </div>
        )
}