import { useState } from "react";
import InputBox from "./InputBox";

export default function({ onChangeValue }) {


  function secondChange(valId, newNumber) {
    onChangeValue(valId, newNumber)
  }

  return (
    <>
      <div id="user-input"  >
        
          <InputBox name="Initial Investment" valId="1" theValue={secondChange}/>
          <InputBox name="Annual Investment" valId="2" theValue={secondChange}/>
          <InputBox name="Expected Return" valId="3" theValue={secondChange}/>
          <InputBox name="Duration" valId="4" theValue={secondChange}/>
        
      </div>
    </>
  )
}