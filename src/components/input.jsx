import React from "react";
import '../App.css';


function Input(input){
    return(
        <input type="text" onChange={input.ipFunc}  value={input.value}/>
    )
}

export default Input;