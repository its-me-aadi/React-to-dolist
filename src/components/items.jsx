import React from "react";

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