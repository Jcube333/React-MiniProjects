import React from 'react'

const TableBody=(props)=> {
  return (
    
    <tbody>
    {props.tableEntries?.map((yearData)=>
              <tr>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>{yearData.yearlyContribution}</td>
          </tr>)}
    </tbody>
   
  )
}

export default TableBody;