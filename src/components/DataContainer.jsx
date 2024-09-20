

export default function DataContainer({ data }) {
  console.log('data', data)
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