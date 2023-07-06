import React, { useState } from 'react'

const Form=()=>{

    const [currSavings,setCurrSavings]=useState();
    const [yearlySavings,setYearlySavings]=useState();
    const [returns, setReturns]=useState()
    const [duration,setDuration]=useState()

    const submitHnadler=(e)=>{
        e.preventDefault();



    }
  return (
    <div>
          <form className="form" onSubmit={submitHnadler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={(e)=>{setCurrSavings(e.target.value)}}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={(e)=>{setYearlySavings(e.target.value)}}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={(e)=>{setReturns(e.target.value)}}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={(e)=>{setDuration(e.target.value)}}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
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