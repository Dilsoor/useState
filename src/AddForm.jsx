import React, { useState } from 'react'
import "./AddForm.css"

function AddForm() {
    const [inputVal, setInputVal] = useState('');
  return (
    <div className="input">
      <input
        value={inputVal}
        onChange={event => setInputVal(event.target.value)}
      />
      <p>The useState value is: {inputVal}</p>
      <button onClick={()=>setInputVal('')}>Clear</button>
    </div>
  );
}

export default AddForm