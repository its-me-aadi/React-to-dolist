import React from "react";
import Button from "./button";
import Input from "./input";

function Form(form){
return (
    <div className="form">
        <Input ipFunc={form.inputFunc} value={form.value}/>
        <Button func={form.buttonFunc}/>
      </div>
)

}

export default Form;