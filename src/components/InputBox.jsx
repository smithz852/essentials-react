export default function InputBox({ name }) {
  return (
    <>
    <div>
    <label htmlFor="amount">{name}</label>
    <input type="text" id="amount"/>
    </div>
       
    </>
  )
}