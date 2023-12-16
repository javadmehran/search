import React, { useEffect, useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [title,setTitle]=useState('')
  useEffect(()=>{
document.title=title

  },[title])

  return (
    <>
      <button className='btn btn-success' onClick={() => setCount(count + 1)}>+</button>
      <h2>{count}</h2>
      <button className='btn btn-danger' disabled={count===0?true:false} onClick={() => setCount(count - 1)}>-</button>
      <input type='text' placeholder='enter title' onChange={(e)=>setTitle(e.target.value)}/><br/>
      <button >click</button>
    </>
  )
}
