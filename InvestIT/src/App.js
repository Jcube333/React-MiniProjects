import { useState } from "react";
import logo from "./assets/logo.png";
import Form from "./Components/Form/form.jsx";
import ResultTable from "./Components/ResultTable/ResultTable";
import Header from "./Components/Header/Header";

function App() {
  const [yearData,setYearlyData]=useState()
  const dataHandler=(data)=>{

    const yearlyData = []; 

    let currentSavings = +data['current-savings']; 

    const yearlyContribution = +data['yearly-contribution']; 
    const expectedReturn = +data['expected-return'] / 100;
    const duration = +data['duration'];



    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlyData(yearlyData);
   

  }
  return (
    <div>
     <Header/>
      <Form queriedData={dataHandler}/>
      <ResultTable yearData={yearData}/>
    </div>
  );
}

export default App;
