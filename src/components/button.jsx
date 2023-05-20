import React from "react";
import '../App.css';


 function button(button){
    return (<button onClick={button.func}>
          <span>Add</span>
        </button>)
 }

 export default button;