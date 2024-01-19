import React from 'react'

function PayslipPreview({
  payslipTitle,
  payslipDate,
  payslipList,
    setpayslipList
}) {
  return (
    <>
        <section className='w-1/2 mr-1'>
            <div className='w-full h-auto rounded flex justify-center items-center'>
            <table width="100%">
    
    {payslipList.map(({id,payslipTitle,payslipDate})=>(
   <React.Fragment key={id}>
    <tbody>
        <tr>
          <td><span className='font-bold'>{payslipTitle}:</span></td>
          <td>{payslipDate}</td>
          
        </tr>
      </tbody>
    </React.Fragment>
     
    ))
  }
  </table>
           </div>
           
        </section>
    </>
  )
}

export default PayslipPreview
