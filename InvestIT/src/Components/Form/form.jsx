import React, { useState } from 'react'

const Form=(props)=>{

    const [currSavings,setCurrSavings]=useState();
    const [yearlySavings,setYearlySavings]=useState();
    const [returns, setReturns]=useState()
    const [duration,setDuration]=useState()

    const resetHandler=()=>{
        setCurrSavings()
        setYearlySavings()
        setReturns()
        setDuration()
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const data={
            'current-savings':currSavings,
            'yearly-contribution':yearlySavings,
            'expected-return':returns,
            'duration':duration

        }
        props.queriedData(data);

    }
  return (
    <div>
          <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings"
            value={currSavings} 
            onChange={(e)=>{setCurrSavings(e.target.value)}}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution"
            value={yearlySavings} onChange={(e)=>{setYearlySavings(e.target.value)}}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" 
            value={returns} onChange={(e)=>{setReturns(e.target.value)}}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={duration} onChange={(e)=>{setDuration(e.target.value)}}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  )
}

export default Form;