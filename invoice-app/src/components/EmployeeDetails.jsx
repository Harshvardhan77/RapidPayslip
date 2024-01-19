import React, { Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {AiOutlineDelete} from "react-icons/ai";
import { useState } from 'react';



function EmployeeDetails({ 
  employeeList,
  setEmployeeList,
  empDetailTitle,
  setEmpDetailTitle,
  empDetailsAmount,
  setEmpDetailsAmount,
 }) {


  const[errors,setErrors]=useState({})
   
  // Add item function
  const addItem=()=>{
    {
      const newItems = {
        id: uuidv4(),
        empDetailTitle,
        empDetailsAmount,
      };
  
      setEmpDetailTitle("");
      setEmpDetailsAmount("");
      setEmployeeList([...employeeList, newItems]);
  };
  }

  // Handle submit Function
         const handleSubmit = (e) => {

          e.preventDefault();
      
          const validationErrors = {};
          const specialCharactersRegex = /^[!@#$%^&*()?`/~]+$/;
  
          // Emp title validation
          if (!empDetailTitle.trim()) {
            validationErrors.empDetailTitle = 'Required';
          }
          if(!isNaN(empDetailTitle)){
            validationErrors.empDetailTitle='Enter characters'
          }
          if(specialCharactersRegex.test(empDetailTitle)){
            validationErrors.empDetailTitle='Invalid'
          }

          // Empdetails validation
          if (!empDetailsAmount.trim()) {
            validationErrors.empDetailsAmount = 'Required';
          }
          if(specialCharactersRegex.test(empDetailsAmount)){
            validationErrors.empDetailsAmount='Invalid'
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
      
      // delete row function
      const deleteRow= (id)=> setEmployeeList(employeeList.filter((row)=> row.id!==id))

  return (
    <>
      <table width="100%">
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                id='empIdTitle'
                className='overflow-ellipsis overflow-hidden outline-none'
                value={empDetailTitle}
                onChange={(e) => setEmpDetailTitle(e.target.value)}
                placeholder='Emp id'
                style={{marginLeft:'17px'}}
                onKeyDown={(e)=>handleEmpIdKeyDown(e,'empDetailTitle')}
                onFocus={(e)=>handleSubmit(e)}
              />
              {errors.empDetailTitle && <p className='error'>{errors.empDetailTitle}</p>}
            </td>

            <td>
              <input
                type="text"
                id='empDetailsAmount'
                className='overflow-ellipsis overflow-hidden outline-none'
                value={empDetailsAmount}
                placeholder='Enter Employee id'
                onChange={(e) => setEmpDetailsAmount(e.target.value)}
                style={{marginLeft:'17px'}}
                onFocus={(e)=>handleSubmit(e)}
                />
              {errors.empDetailsAmount && <p className='error'>{errors.empDetailsAmount}</p>}
              </td>

            <td><a></a></td>
          </tr>
          
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='4'>
            
            </td>
          </tr>
        </tfoot>
        </table>
        <button type='submit'
                className="bg-blue-500 m-5 py-1 text-white px-6 rounded shadow font-bold border-2 border-blue-500 hover:bg-transparent 
                hover:text-blue-500 transition-all duration-300"
                onClick={(e)=>handleSubmit(e)}>
                Add Item
                
              </button>
  
      

    {/* Table items */}
    
      <table width="100%">
    
      {employeeList.map(({id,empDetailTitle,empDetailsAmount})=>(
     <React.Fragment key={id}>
      <tbody>
          <tr>
            <td>
            <span className='font-bold' style={{marginLeft:'17px'}}>{empDetailTitle}:</span>
            </td>
            <td>{empDetailsAmount}</td>
            <td>
                <button className='text-red-400 text-xl' onClick={()=>deleteRow(id)}><AiOutlineDelete /></button>
                </td>
          </tr>
        </tbody>
      </React.Fragment>
       
      ))
    }
    </table>
  
        
        
    
  </>
  )
}

export default EmployeeDetails









