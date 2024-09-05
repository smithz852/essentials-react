import InputBox from "./InputBox";

export default function() {
  return (
    <>
      <div id="user-input"  >
        
          <InputBox name="Initial Investment"/>
          <InputBox name="Annual Investment"/>
          <InputBox name="Expected Return"/>
          <InputBox name="Duration"/>
        
      </div>
    </>
  )
}