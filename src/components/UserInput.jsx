import { useState } from "react";
import InputBox from "./InputBox";

export default function() {
const [investValue, setInvestValue] = useState()

function handleInputChange(valId, newNumber) {
  setInvestValue(prevValue => {
    return {
      ...prevValue,
      [valId]: newNumber
    }
  })
}

  return (
    <>
      <div id="user-input"  >
        
          <InputBox name="Initial Investment" valId="1" onChangeValue={handleInputChange}/>
          <InputBox name="Annual Investment" valId="2" onChangeValue={handleInputChange}/>
          <InputBox name="Expected Return" valId="3" onChangeValue={handleInputChange}/>
          <InputBox name="Duration" valId="4" onChangeValue={handleInputChange}/>
        
      </div>
    </>
  )
}