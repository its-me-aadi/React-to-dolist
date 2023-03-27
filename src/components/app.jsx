import React, { useState } from "react";

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
  


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={newItem} value={item}/>
        <button onClick={Add}>
          <span>Add</span>
        </button>
      </div>
      <div>
          {list.map(listItem=>{
          return (
            <ul>
              <li>
              {listItem}
              </li>
          </ul>
            ) 
        })}   
      </div>
    </div>
  );
}

export default App;
