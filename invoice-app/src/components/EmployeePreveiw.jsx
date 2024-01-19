import React from 'react'

function EmployeePreveiw({
  empDetailTitle,
  empDetailsAmount,
  employeeList
}) {
  return (
    <>
        <section className='w-1/2'>
            <div className='w-full h-auto rounded flex justify-center items-center '>
            <table width="100%">
    
    {employeeList.map(({id,empDetailTitle,empDetailsAmount})=>(
   <React.Fragment key={id}>
    <tbody>
        <tr>
          <td><span className='font-bold'>{empDetailTitle}:</span></td>
          <td>{empDetailsAmount}</td>
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

export default EmployeePreveiw
