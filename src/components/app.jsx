import React, { useState } from "react";
import Items from "./items";
import Heading from "./heading";
import Form from "./form";

function App() {

  const [item,setItem]=useState("");

  const [list,setList]=useState(["YO"]);
  function newItem(event){
    const {value}=event.target;
    setItem(value);
    console.log(item);
  }
  function Add(){
    setList(prevValue=>
        [...prevValue,item]
    );
    console.log(list);
  }
  function Delete(id){
    setList(prevValue=>{
      return (
        prevValue.filter((item,index)=>{
          return index!==id;
        })
      )
      
    })
    
    
  }


  return (
    <div className="container">
      <Heading/>
      <Form inputFunc={newItem} value={item} buttonFunc={Add}/>
      <div>
          <ul>
          {
            list.map((listItem,index)=>(
              <Items key={index} id={index} text={listItem} delete={Delete} />
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
