import { useState } from "react";
import InputBox from "./InputBox";

export default function({ onChangeValue }) {


  function secondChange(valId, newNumber) {
    onChangeValue(valId, newNumber)
  }

  return (
    <>
      <div id="user-input"  >
        
          <InputBox name="Initial Investment" valId="initialInvestment" theValue={secondChange}/>
          <InputBox name="Annual Investment" valId="annualInvestment" theValue={secondChange}/>
          <InputBox name="Expected Return" valId="expectedReturn" theValue={secondChange}/>
          <InputBox name="Duration" valId="duration" theValue={secondChange}/>
        
      </div>
    </>
  )
}