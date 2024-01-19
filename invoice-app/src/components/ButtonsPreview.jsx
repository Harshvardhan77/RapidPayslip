import React from 'react'
import html2pdf from 'html2pdf.js';


function ButtonsPreview({setShowPreview}) {
    const handlePrint =()=>{
        window.print();
    }
    function downloadWebpage() {
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
      <section>
        <div className=' m-5 w-full flex justify-center items-center'>
        <button onClick={()=>setShowPreview(false)} className="bg-blue-500 m-5 py-1 text-white px-6
        rounded shadow font-bold border-2 border-blue-500 hover:bg-transparent 
         hover:text-blue-500 transition-all duration-300" >Check Details</button>
        <button onClick={downloadWebpage} className="bg-blue-500 py-1 text-white px-6
        rounded shadow font-bold border-2 border-blue-500 m-5 hover:bg-transparent 
         hover:text-blue-500 transition-all duration-300" >Download</button>
        <button onClick={handlePrint} className="bg-blue-500 py-1 text-white px-6
        rounded shadow font-bold border-2 border-blue-500 m-5 hover:bg-transparent 
         hover:text-blue-500 transition-all duration-300" >Print</button>
        </div>
        </section>
    </>
  )
}

export default ButtonsPreview
