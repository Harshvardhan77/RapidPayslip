import { useState } from "react";
import React from "react";
import './App.css';   
import './index.css'
import FooterDetails from "./components/FooterDetails";
import SalaryDetails from "./components/SalaryDetails";
import PEDetails from "./components/PEDetails";
import Header from "./components/Header";
import HeaderPreview from "./components/HeaderPreview";
import MonthHeader from "./components/MonthHeader";
import EmployeePreveiw from "./components/EmployeePreveiw";
import PayslipPreview from "./components/PayslipPreview";
import EarningDetailsPreview from "./components/EarningDetailsPreview";
import DeductionDetailsPreview from "./components/DeductionDetailsPreview";
import SubTotalPreview from "./components/SubTotalPreview";
import ButtonsPreview from "./components/ButtonsPreview";
import NotePreview from "./components/NotePreview";
import useStateInfo from "./Hooks/useStateInfo";
import useCityInfo from "./Hooks/useCityInfo"
import html2pdf from 'html2pdf.js';
import TitleComponent from "./components/TitleComponent";
import ButtonDetails from "./components/ButtonDetails";



function App({}) {
  const [showPreview,setShowPreview]=useState(false)
  const [payMonth, setPayMonth]=useState("July 2024")
  const [payslipTitle,setPayslipTitle]=useState("Pay date")
  const [payslipDate,setPayslipDate]= useState("")
  const [payslipList,setpayslipList]=useState([])
  const [empIdTitle,setEmpIdTitle]=useState("Emp ID")
  const [employeeList, setEmployeeList]=useState([])
  const [empDetailTitle, setEmpDetailTitle]= useState("Employee Id")
  const [empDetailsAmount, setEmpDetailsAmount]= useState("")
  const [earningTitle,setEarningTitle]=useState("")
  const [deductionTitle,setDeductionTitle]=useState("")
  const [deductionHeaderTitle,setDeductionHeaderTitle]=useState("Deductions")
  const [deductionHeaderAmount,setDeductionHeaderAmount]=useState("Amount")
  const [earningAmount,setEarningAmount]=useState("")
  const [earningHeaderTitle,setEarningHeaderTitle]=useState("Title")
  const [earningHeaderAmount,setEarningHeaderAmount]=useState("Amount")
  const [deductionAmount,setDeductionAmount]=useState("")
  const [earningList,setEarningList]=useState([])
  const [deductionList,setDeductionList]=useState([])
  const [note,setNote]=useState("")
  const [netPayTitle, setNetPayTitle]= useState("Net Pay")
  const [netAmount,setNetAmount]=useState("")
  const [totalEarningTitle,setTotalEarningTitle]=useState("Total Earning")
  const [totalEarningAmount,setTotalEarningAmount]=useState("")
  const [totalDeductionAmount,setTotalDeductionAmount]=useState("")
  const [totalDeductionTitle,setTotalDeductionTitle]=useState("")
  const [headerTitle,setHeaderTitle]=useState("")
  const [companyName, setCompanyName]=useState("")
  const [email, setEmail]= useState("")
  const [subTotal, setSubTotal]= useState("")
  const [image,setImage]= useState("")
  const [amountWords, setAmountWords]=useState("")
  const [errors,setErrors]= useState({})
  const [selectState, setSelectState]=useState("")
  const [selectCity, setSelectCity]=useState('')
  const stateOptions= useStateInfo('')
  const cityOptions=useCityInfo(selectState)
  const validationErrors = {};
  
  const specialCharactersRegex = /[!@#$%^&*()?`]/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const maxLength = 25;
  const numericRegex = /\d/;

  const validateField = (field, value, errorMessage) => {
    if (!value.trim()) {
      validationErrors[field] = 'Required';
    }
    else if (specialCharactersRegex.test(value)) {
      validationErrors[field] = errorMessage || 'Invalid input';
    } else if (value.length > maxLength) {
      validationErrors[field] = `${field} is too long`;
    }
  };

  const handleSubmitMain = (e) => {
  e.preventDefault();

  // headerTitle
  validateField('headerTitle',headerTitle)
  if(!headerTitle.trim()){
    validationErrors.headerTitle='Required'
  }
  if (numericRegex.test(headerTitle)) {
    validationErrors.headerTitle = 'Invalid';
  }
  
  // email
  if(!email.trim()){
    validationErrors.email='Required'
  }else if(!emailRegex.test(email)){
    validationErrors.email='invalid email'
  }
   
  // select city
  if(!selectCity.trim()){
    validationErrors.selectCity='Required'
  }

  // select state
  if(!selectState.trim()){
    validationErrors.selectState='Required'
  }

  // paymonth
  if(!payMonth){
    validationErrors.payMonth='Required'
  }

  // Company Name
  validateField('companyName',companyName)
  if(!companyName.trim()){
    validationErrors.companyName='Required'
  }
  if (numericRegex.test(companyName)) {
    validationErrors.companyName = 'Invalid';
  }
  
  // image
  if (!image) {
    validationErrors.image = 'Required';
  }


  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
    
  }
  else{
    setShowPreview(true)
  }
  
};

function downloadWebpage(e) {
  e.preventDefault();
  const payslipElement = document.getElementById('payslip-container');

  if(payslipElement){
    html2pdf(payslipElement);
  }
  else{
    console.error('Payslip element not found');
  }

}

  return (
    
    <>
    {showPreview ? <div>
      <div id="payslip-container" className="print-content">
    <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto rounded shadow-xl">

      <HeaderPreview 
      companyName={companyName} 
      email={email}
      image={image}
      setImage={setImage}
      selectCity={selectCity}
      selectState={selectState}/>
    

  
    <MonthHeader 
    headerTitle={headerTitle}
     payMonth={payMonth}/>

    {/* Employee and paylsip details started */}
    <section className={`flex flex-row min-h-0 rounded mb-2 payslip-color-2 ${
    (!empDetailTitle.trim() || !payslipTitle.trim()) ? 'border-2 border-black' : ''
  }`}
>
    <EmployeePreveiw 
    empDetailTitle={empDetailTitle} 
    empDetailsAmount={empDetailsAmount} 
    employeeList={employeeList} 
    setEmployeeList={setEmployeeList}/>
    <PayslipPreview 
    payslipTitle={payslipTitle} 
    payslipDate={payslipDate} 
    payslipList={payslipList} 
    setpayslipList={setpayslipList} />
    </section>
    
    {/* Employee and payslip details ended */}
    
    {/* Earning and deduction details started */}
    <section className='flex flex-row  h-auto border-black border-2 rounded payslip-color-2'>
        <EarningDetailsPreview 
        earningHeaderTitle={earningHeaderTitle} 
        earningHeaderAmount={earningHeaderAmount}
        earningTitle={earningTitle}
        earningAmount={earningAmount}
        earningList={earningList}/>
        
        <DeductionDetailsPreview
        deductionHeaderTitle={deductionHeaderTitle}
        deductionHeaderAmount={deductionHeaderAmount}
        deductionTitle={deductionTitle}
        deductionAmount={deductionAmount}
        deductionList={deductionList}
        />
    </section>

    {/* Earning and deduction details ended */}

    <SubTotalPreview 
    subTotal={subTotal} 
    setSubTotal={setSubTotal}
    netPayTitle={netPayTitle}
    totalEarningAmount={totalEarningAmount}
    totalDeductionAmount={totalDeductionAmount}/>

  
{note.trim() ? (
  <NotePreview
    note={note}
    setNote={setNote}
  />
) : null}

  
   </main> 
   </div>
   <ButtonsPreview 
    showPreview={showPreview} 
    setShowPreview={setShowPreview}
    downloadWebpage={downloadWebpage}/>

      </div>:(
        <>
        <form onSubmit={(e) => handleSubmitMain(e)}>
  <div className="flex input_class justify-center items-center col-span-4 mr-5">

    <div className="w-4/5">

    <TitleComponent/>
    <div className="bg_4">
    <Header 
    headerTitle={headerTitle} 
    setHeaderTitle={setHeaderTitle} 
    companyName={companyName} 
    setCompanyName={setCompanyName} 
    email={email}
    setEmail={setEmail}
    image={image}
    setImage={setImage}
    errors={errors}
    setErrors={setErrors}
    handleSubmitMain={handleSubmitMain}
    setShowPreview={setShowPreview}
    selectState={selectState}
    setSelectState={setSelectState}
    selectCity={selectCity}
    setSelectCity={setSelectCity}
    cityOptions={cityOptions}
    stateOptions={stateOptions}
    payMonth={payMonth}
    setPayMonth={setPayMonth}
    validationErrors={validationErrors}
    validateField={validateField}
    />


     <PEDetails  
     payMonth={payMonth}
     setPayMonth={setPayMonth}
    payslipTitle={payslipTitle} 
    setPayslipTitle={setPayslipTitle} 
    payslipDate={payslipDate} 
    setPayslipDate={setPayslipDate}
    payslipList={payslipList} 
    setpayslipList={setpayslipList} 
    empIdTitle={empIdTitle} 
    setEmpIdTitle={setEmpIdTitle} 
    employeeList={employeeList} 
    setEmployeeList={setEmployeeList} 
    empDetailTitle={empDetailTitle} 
    setEmpDetailTitle={setEmpDetailTitle}
    empDetailsAmount={empDetailsAmount} 
    setEmpDetailsAmount={setEmpDetailsAmount}
  /> 

    <SalaryDetails earningTitle={earningTitle} 
    setEarningTitle={setEarningTitle} 
    setEarningAmount={setEarningAmount} 
    earningAmount={earningAmount} 
    netPayTitle={netPayTitle}
    setNetPayTitle={setNetPayTitle}
    earningList={earningList} 
    setEarningList={setEarningList}
    deductionAmount={deductionAmount} 
    setDeductionAmount={setDeductionAmount} 
    deductionTitle={deductionTitle} 
    setDeductionTitle={setDeductionTitle} 
    deductionList={deductionList} 
    setDeductionList={setDeductionList}
    setDeductionHeaderTitle={setDeductionHeaderTitle} 
    setDeductionHeaderAmount={setDeductionHeaderAmount}
    earningHeaderAmount={earningHeaderAmount} 
    setEarningHeaderAmount={setEarningHeaderAmount} 
    earningHeaderTitle={earningHeaderTitle} 
    setEarningHeaderTitle={setEarningHeaderTitle} 
    netAmount={netAmount} setNetAmount={setNetAmount} 
    totalEarningTitle={totalEarningTitle} 
    setTotalEarningTitle={setTotalEarningTitle} 
    totalDeductionAmount={totalDeductionAmount} 
    setTotalDeductionAmount={setTotalDeductionAmount}
    totalEarningAmount={totalEarningAmount} 
    setTotalEarningAmount={setTotalEarningAmount} 
    setTotalDeductionTitle={setTotalDeductionTitle}
    subTotal={subTotal}
    setSubTotal={setSubTotal}/> 
    <FooterDetails note={note} 
    setNote={setNote}
    subTotal={subTotal}
    amountWords={amountWords}
    setAmountWords={setAmountWords}/>
    <ButtonDetails 
    handleSubmitMain={handleSubmitMain}
    downloadWebpage={downloadWebpage}
    />
 </div>
  
    </div>
    </div>
    
    </form>
  
    </>
        )}

  
    </>

  );
}

export default App;
