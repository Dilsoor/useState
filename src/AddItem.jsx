import React from 'react'
import {useState} from "react"

function AddItem({arr,addItem,delItem}) {
  const [text, setText]=useState("")

  return (
    <>
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={()=>{
        setText('');
        addItem({title:text})
      }}>Add</button>
    </div>
    <ul>
      {arr.map(el=>{
        return (
        <div key={el.id}>
          <h4 >{el.title}</h4>
          <button onClick={()=>delItem(el.id)}>Delete</button>
        </div>
        )
      })}
    </ul>
    </>
  )
}

export default AddItem