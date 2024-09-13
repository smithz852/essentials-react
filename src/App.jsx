import DataContainer from "./components/DataContainer"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react"




function App() {
  const [investValue, setInvestValue] = useState()

function handleInputChange(valId, newNumber) {
  setInvestValue(prevValue => {
    console.log(valId)
    return {
      ...prevValue,
      [valId]: newNumber
    }
  })
}
  return (
    <>
      <Header />
      <UserInput onChangeValue={handleInputChange} />
      <DataContainer />
    </>
  )
}

export default App
