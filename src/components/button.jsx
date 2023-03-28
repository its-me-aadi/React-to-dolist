import React from "react";


 function button(button){
    return (<button onClick={button.func}>
          <span>Add</span>
        </button>)
 }

 export default button;