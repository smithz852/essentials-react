import { calculateInvestmentResults } from '../util/investment.js'

export default function DataContainer({ data }) {

  console.log('data', data)

  let initialInvestment = parseInt(data.initialInvestment)
  let annualInvestment = parseInt(data.annualInvestment)
  let expectedReturn = parseInt(data.expectedReturn)
  let duration = parseInt(data.duration)

  if (!initialInvestment) {
    initialInvestment = 0
  }

  if (!annualInvestment) {
    annualInvestment = 0
  }

  if (!expectedReturn) {
    expectedReturn = 0
  }

  if (!duration) {
    duration = 0
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
      <tr>
        <td>YC</td>
        <td>V</td>
        <td>IY</td>
        <td>TI</td>
        <td>IC</td>
      </tr>
      <tr>
        <td>YC</td>
        <td>V</td>
        <td>IY</td>
        <td>TI</td>
        <td>IC</td>
      </tr>
    </tbody>
   </table>
    </>
  )
}