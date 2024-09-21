import { useState } from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function DataContainer({ data }) {
  const [dataTable, setDataTable] = useState(
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
    )

  console.log('data', data)

  let initialInvestment = parseInt(data.initialInvestment)
  let annualInvestment = parseInt(data.annualInvestment)
  let expectedReturn = parseInt(data.expectedReturn)
  let duration = parseInt(data.duration)

  if (!initialInvestment) {
    initialInvestment = 1500
  }

  if (!annualInvestment) {
    annualInvestment = 500
  }

  if (!expectedReturn) {
    expectedReturn = 5
  }

  if (!duration) {
    duration = 3
  }

  const collectiveData = {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  }

  console.log(initialInvestment)
  console.log(annualInvestment)
  console.log(expectedReturn)
  console.log(duration)


  const dataResults = calculateInvestmentResults(collectiveData)
  const firstInvestment = dataResults[0].valueEndOfYear - dataResults[0].interest - dataResults[0].annualInvestment


  console.log('results', dataResults)



  return (
    <>
      <table id="result" >
    <thead>
      <tr>
        <th>Year Count</th>
        <th>Value</th>
        <th>Interest /Year</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {dataResults.map(el => {
        const totalInterest = el.valueEndOfYear - el.annualInvestment * el.year - firstInvestment
        const totalAmountInvested = el.valueEndOfYear - totalInterest
        return <tr key={el.year}>
          <td>{el.year}</td>
          <td>{formatter.format(el.valueEndOfYear)}</td>
          <td>{formatter.format(el.interest)}</td>
          <td>{formatter.format(totalInterest)}</td>
          <td>{formatter.format(totalAmountInvested)}</td>
        </tr>
      })}
    </tbody>
   </table>
    </>
  )
}