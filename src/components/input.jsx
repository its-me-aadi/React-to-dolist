import React from "react";

function Input(input){
    return(
        <input type="text" onChange={input.ipFunc}  value={input.value}/>
    )
}

export default Input;