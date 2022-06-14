import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {incNumber, decNumber}from './actions'
const App = () => {
  const initialValue = useSelector(state => state.incrementDecrement)
 const dispatch = useDispatch();
  const [input, setInput]=useState('')
  const increment=()=>{
    dispatch(incNumber(input))
  }
  const decrement = () => { 
    dispatch(decNumber(input)) 
  }
  return (
    <>
    <h1>{initialValue}</h1>
    <div className='container'>
        <button onClick={decrement}>-</button>
        <input type='text' onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={increment}>+</button>
    </div>
    </>
    
  )
}

export default App