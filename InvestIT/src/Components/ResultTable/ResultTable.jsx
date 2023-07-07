import React from 'react'
import TableHeader from '../TableHeader/TableHeader.jsx'
import TableBody from '../TableBody/TableBody.jsx';

const ResultTable=(props)=> {

  return (

    <div>
    {props.yearData &&(<table className="result">
    <TableHeader/>
    <TableBody tableEntries={props.yearData}/></table>)
    }
    </div>
    )
}

export default ResultTable;