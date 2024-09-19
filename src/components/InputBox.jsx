import { useState } from "react"
import { calculateInvestmentResults } from "../util/investment"

export default function InputBox({ name, valId, theValue }) {
const [inputVal, setInputVal] = useState('0')


function handleChange(event) {
 setInputVal(event.target.value)
 console.log(event.target.value)
 theValue(valId, event.target.value)
}


  return (
    <>
    <div>
    <label htmlFor="amount">{name}</label>
    <input type="text" id="amount" value={!inputVal ? "0" : inputVal} onChange={handleChange}/>
    </div>
       
    </>
  )
}

