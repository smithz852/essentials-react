import { useState } from "react"

export default function InputBox({ name, valId, onChangeValue }) {
const [inputVal, setInputVal] = useState()


function handleChange(event) {
 setInputVal(event.target.value)
 console.log(event.target.value)
 onChangeValue(valId, inputVal)
}

  return (
    <>
    <div>
    <label htmlFor="amount">{name}</label>
    <input type="text" id="amount" value={!inputVal ? "" : inputVal} onChange={handleChange}/>
    </div>
       
    </>
  )
}