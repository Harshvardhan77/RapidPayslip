  import React, { useState } from 'react'
  import { v4 as uuidv4 } from 'uuid';
  import {AiOutlineDelete} from 'react-icons/ai'
  

 
  function PayslipDetails({ 
    payslipTitle,
    setPayslipTitle,
    payslipDate,
    setPayslipDate,
    payslipList,
    setpayslipList,
    
  

  }) {

    // HandleSubmit
    const[errors,setErrors]=useState({})
    const specialCharactersRegex = /^[!@#$%^&*()?`/~]+$/;


        const handleSubmit = (e) => {
          e.preventDefault();
      
          const validationErrors = {};
  
          // payslip title
          if (!payslipTitle.trim()) {
            validationErrors.payslipTitle = 'Required';
          }
          if (!isNaN(payslipTitle)) {
            validationErrors.payslipTitle = 'Enter characters';
          }
          if(specialCharactersRegex.test(payslipTitle)){
            validationErrors.payslipTitle='Invalid'
          }

          // payslip date
          if (!payslipDate.trim()) {
            validationErrors.payslipDate = 'Required';
          }
          if(specialCharactersRegex.test(payslipDate)){
            validationErrors.payslipDate='Invalid'
          }

          
          
          if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
          }


          else{
            addItem();
            setErrors({});
          
      };
      }

      // Add item function
      const addItem=()=>{
        const newItems = {
          id: uuidv4(),
          payslipTitle,
          payslipDate,
        };
    
        setPayslipTitle("");
        setPayslipDate("");
        setpayslipList([...payslipList, newItems]);
      }

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

      // Delete Function
      const deleteRow= (id)=> setpayslipList(payslipList.filter((row)=> row.id!==id))
    return (
      <>
          
          <div className=' h-12'>
              <h2 className='font-bold text-xl ml-2'>Payslip Details</h2>
          </div>
        <table width="100%">
        <tbody>
        <tr>
              <td></td>
              
              <td>
                <input
                  type="text"
                  id='payslipTitle'
                  className='overflow-ellipsis overflow-hidden outline-none'
                  value={payslipTitle}
                  onChange={(e) => setPayslipTitle(e.target.value)}
                  style={{marginLeft:'17px'}}
                  placeholder='Pay Date'
                  onKeyDown={(e)=>handleEmpIdKeyDown(e,'payslipTitle')}
                  onFocus={(e)=>handleSubmit(e)}
                />
            {errors && errors.payslipTitle && <p className='error'>{errors.payslipTitle}</p>}
             </td>

              <td>
                <input
                  type="text"
                  id='payslipDate'
                  className='overflow-ellipsis overflow-hidden outline-none'
                  value={payslipDate}
                  placeholder='Enter Value'
                  onChange={(e) => {setPayslipDate(e.target.value)}}
                  style={{marginLeft:'17px'}}
                  onFocus={(e)=>handleSubmit(e)}
                />
              {errors.payslipDate && <p className='error'>{errors.payslipDate}</p>}

              </td>
              <td><a><button></button></a></td>
              
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <td colSpan='4'>
              
              </td>
            </tr>
          </tfoot>

          </table>
          <button
                  className="bg-blue-500 m-5 py-1 text-white px-6 rounded shadow font-bold border-2 border-blue-500 hover:bg-transparent 
                  hover:text-blue-500 transition-all duration-300"
                  onClick={handleSubmit}
                >
                  Add Item
                </button>


      {/* Table items */}

        <table width="100%">
        {payslipList.map(({id,payslipTitle,payslipDate})=>(
          <React.Fragment key={id}>
        <tbody>
            <tr>
              <td>
                <span className='font-bold' style={{marginLeft:'17px'}}>{payslipTitle}</span>
                </td>
              <td>{payslipDate}</td>
              <td>
                <button className='text-red-400 text-xl' onClick={()=>deleteRow(id)}><AiOutlineDelete/></button>
                </td>
            </tr>
          </tbody>
        </React.Fragment>
       
        ))}
        
        </table>
        
          
        </>
    )
  }

  export default PayslipDetails

