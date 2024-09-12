import DataColumn from "./dataColumn";

export default function DataContainer() {
  return (
    <>
    <div id="result" className="dataFlex">
      <DataColumn title="Year Count"/>
      <DataColumn title="Value"/>
      <DataColumn title="Interest /Year"/>
      <DataColumn title="Total Interest"/>
      <DataColumn title="Invested Capital"/>
    </div>
    </>
  )
}