import React from "react";
import '../App.css';

function Items(list){
    return(   
              <li onClick={()=>{
              list.delete(list.id)}
              }>
              {list.text}
              </li>  
    )
}
export default Items;