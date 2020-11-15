import React from 'react';
import './App.css';
// import 'font-awesome/css/font-awesome.min.css';

const Card = (props)=>{

    //function to check if checkbox should be checked or not by default
    const isChecked = ()=>{
        if(props.ischecked==="true"){
            return true; 
        }else{
            return false;
        }
    }
    
    //function that triggers when checkbox is changed
    const checked = (event)=>{
        if(event.target.checked){
            props.checked_func();
        }else{
            props.unchecked_func();
        }
    }

    return (
        <div className="card carddiv mb-2">
            <div className="card-body d-flex justify-content-between">
              <h6><label>
                  <input 
                  type="checkbox" 
                  className="check" 
                  onChange={checked} 
                  checked={isChecked()} /> 
                  <i className={isChecked() ? "pl-2 strike" : "pl-2"}>{props.text}</i>
                  </label></h6>
               <i className="fa fa-times text-danger icon" onClick={()=>{props.del()}}></i> 
            </div>
        </div>
    )
}

export default Card