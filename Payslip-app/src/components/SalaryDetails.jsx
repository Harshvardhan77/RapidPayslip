import React from 'react';
import SalaryDetailsDeductions from './SalaryDetailsDeductions';
import SalaryDetailsEarning from './SalaryDetailsEarning';
import NetPay from './NetPay';
import { useEffect } from 'react';

function SalaryDetails({ 
  earningTitle,
  setEarningTitle,
  setEarningAmount,
  earningAmount,
  earningList,
  setEarningList,
  deductionTitle,
  setDeductionTitle,
  setDeductionAmount,
  deductionAmount,
  deductionList,
  setDeductionList ,
  setDeductionHeaderTitle,
  setDeductionHeaderAmount,
  setEarningHeaderAmount,
  setEarningHeaderTitle,  
  netPay,
  netPayTitle,
  setNetPayTitle,
  setNetPay,
  netAmount,
  setNetAmount,
  setTotalEarningTitle,
  totalEarningAmount,
  setTotalEarningAmount,
  totalDeductionAmount,
  setTotalDeductionAmount,
  subTotal,
  setTotalDeductionTitle,
setSubTotal}) {

    useEffect(()=>{
      setSubTotal(totalEarningAmount-totalDeductionAmount)
  
    },[totalEarningAmount,totalDeductionAmount])

  return (
    

    <>
<div className='w-full bg_1 mt-5 main_text'>
<div className='h-12 font-bold text-3xl flex justify-center items-center bg_2'>
        Salary Details
      </div>
<div className="grid lg:grid-cols-2 gap-4 p-4 md:grid-cols-1 bg_1">
      <div className="col-span-1 border border-class rounded bg_4">
      <SalaryDetailsEarning 
      earningTitle={earningTitle} 
      setEarningTitle={setEarningTitle} 
      setEarningAmount={setEarningAmount} 
      earningAmount={earningAmount}
      earningList={earningList} 
      setEarningList={setEarningList}
      setEarningHeaderAmount={setEarningHeaderAmount} 
      setEarningHeaderTitle={setEarningHeaderTitle} 
      setTotalEarningTitle={setTotalEarningTitle} 
      totalEarningAmount={totalEarningAmount} 
      setTotalEarningAmount={setTotalEarningAmount}/>
      </div>
      <div className="col-span-1 border border-class rounded bg_4">
      <SalaryDetailsDeductions 
      setDeductionHeaderTitle={setDeductionHeaderTitle} 
      deductionTitle={deductionTitle} 
      setDeductionTitle={setDeductionTitle} 
      setDeductionAmount={setDeductionAmount} 
      deductionAmount={deductionAmount} 
      deductionList={deductionList} 
      setDeductionList={setDeductionList} 
      setDeductionHeaderAmount={setDeductionHeaderAmount}
      totalDeductionAmount={totalDeductionAmount} 
      setTotalDeductionAmount={setTotalDeductionAmount} 
      setTotalDeductionTitle={setTotalDeductionTitle}/>
      </div>
    </div>
    <div className='pb-1'>
    <div className='bg_1 mb-4 flex justify-center items-center border border-class ml-4 mr-4 rounded bg_4'>
    <NetPay subTotal={subTotal} netPayTitle={netPayTitle} setNetPayTitle={setNetPayTitle}/>
    </div>
    </div>
    </div>
    
    </>
  );
}

export default SalaryDetails;
