import DataContainer from "./components/DataContainer"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react"




function App() {
  const [investValue, setInvestValue] = useState('0')

function handleInputChange(valId, newNumber) {
  console.log(valId, newNumber)
  setInvestValue(prevValue => {
    console.log(valId)
    console.log("app", newNumber)
    return {
      ...prevValue,
      [valId]: newNumber,
    }
  })
}


  return (
    <>
      <Header />
      <UserInput  onChangeValue={handleInputChange} />
      <DataContainer data={investValue} />
    </>
  )
}

export default App
