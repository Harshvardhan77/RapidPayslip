import React from 'react'

function SubTotalPreview({subTotal,netPayTitle}) {
  
  

  return (
    <>
    <section className='flex justify-end'>
        <div className='w-1/2 h-10 payslip-color-1 mt-2 border-2 rounded border-black'>
        <table width="100%">
            <thead>
              <tr>
                <td className='font-bold'>{netPayTitle}</td>
                <td>{subTotal}</td>
              </tr>
            </thead>
          </table>
        </div>

     </section>
      
    </>
  )
}

export default SubTotalPreview
