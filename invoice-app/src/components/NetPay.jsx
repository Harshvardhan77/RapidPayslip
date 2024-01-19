import { useState } from "react"
import React from 'react'

function NetPay({subTotal,netPayTitle,setNetPayTitle}) {
  const[errors,setErrors]=useState({})
  
  // handleEmpIdKeyDown Function
  const handleEmpIdKeyDown = (e,fieldValue) => {
    const keyPressed = e.key;
  
    if (!isNaN(keyPressed) && keyPressed !== ' ') {
      setErrors({ ...errors, [fieldValue]: 'Invalid input: Numbers not allowed' });
    }
  
    const specialCharactersRegex = /[!@#$%^&*()?`]/;
    if (specialCharactersRegex.test(keyPressed)) {
      setErrors({ ...errors, [fieldValue]: 'Invalid input: Special characters not allowed' });
    }
  };
  return (
    
    <div className='ml-4 mr-4 bg_4'>
      <div className='w-full'>
        <table width="100%">
      <thead>
          <tr>
            <td className='font-bold'></td>
            <td className='font-bold'>
                <input type="text" 
                className='outline-none rounded mb-2' 
                onChange={(e)=>setNetPayTitle(e.target.value)}
                value={netPayTitle}
                onKeyDown={(e)=>handleEmpIdKeyDown(e,'netPayTitle')}/>
                {errors.netPayTitle && <p className='error'>{errors.netPayTitle}</p>}
                
            </td>
            <td className='font-bold'>
                <input type="text" 
                className='outline-none rounded mb-2' 
                placeholder='total amount'
                value={subTotal}
                readOnly
                />
                
            </td>
            <td className='font-bold'></td>
          </tr>
        </thead>
        </table>
        </div>
    </div>
    
  )
}

export default NetPay
