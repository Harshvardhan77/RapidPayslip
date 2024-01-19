import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import {AiOutlineDelete} from 'react-icons/ai'
import { useState } from 'react';
function SalaryDetailsEarning({ 
  earningTitle,
  setEarningTitle,
  setEarningAmount,
  earningAmount,
  earningList,
  setEarningList,
  earningHeaderTitle,
  setEarningHeaderAmount,
  setEarningHeaderTitle,
  setTotalEarningTitle,
  totalEarningAmount,

  setTotalEarningAmount}) {

    const[errors,setErrors]=useState({})

        const handleSubmit = (e) => {
          e.preventDefault();
      
          const validationErrors = {};
          const specialCharactersRegex = /^[!@#$%^&*()?`/~]+$/;
          const numericCharactersRegex = /\d/; 
  
          //earning Title
          if (!earningTitle.trim()) {
            validationErrors.earningTitle = 'Required';
          }
          if (numericCharactersRegex.test(earningTitle)) {
            validationErrors.earningTitle = 'Only characters allowed!';
          }
        
          // earning Amount
          if (!earningAmount.trim()) {
            validationErrors.earningAmount = 'Required';
          }
          if (isNaN(earningAmount)) {
            validationErrors.earningAmount = 'Enter Numbers';
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

      // add item function
      const addItem=()=>{
        const newItems = {
          id: uuidv4(),
          earningTitle,
          earningAmount,
        };
    
        setEarningTitle("");
        setEarningAmount("");
        setEarningList([...earningList, newItems]);
      }
  

      // Total Function
      useEffect(() => {
        let rows = document.querySelectorAll(".earningAmount1");
        let sum = 0;
    
        for (let i = 0; i < rows.length; i++) {
          if (rows[i].className === "earningAmount1") {
            sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
          }
        }
    
        setTotalEarningAmount(sum);
      }, [earningList]); 

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

      // handleEmpIdKeyUp
      const handleEmpIdKeyUp = (e,fieldValue) => {
        const keyPressed = e.key;
  
        const isNumber = /^[0-9]$/.test(keyPressed);
        if (!isNumber) {
          setErrors({ ...errors, [fieldValue]: 'Invalid input: Only numbers allowed' });
        }
      };
      
      // Delete Function
      const deleteRow= (id)=> setEarningList(earningList.filter((row)=> row.id!==id))
  return (
    <>
        <div className=' h-12'>
            <h2 className='font-bold text-xl ml-2'>Earnings </h2>
        </div>
      <table width="100%">
        {/* Dynamic Header */}
        <thead className='bg-gray-200'>
          
          <tr>
            <td className='font-bold'></td>
            <td className='font-bold'><h3 style={{marginLeft:'17px'}}>Header title</h3></td>
            <td className='font-bold'><h3 style={{marginLeft:'17px'}}>Header amount</h3></td>
            <td className='font-bold'></td>
          </tr>
          <tr>
            <td className='font-bold'></td>
            <td className='font-bold'>
                <input type="text" 
                id="earningHeaderTitle"
                className='outline-none rounded mb-2 input_bg' 
                defaultValue='Title'
                onChange={(e)=>setEarningHeaderTitle(e.target.value)}
                style={{marginLeft:'17px'}}
                onKeyDown={(e)=>handleEmpIdKeyDown(e,'earningHeaderTitle')}
                />
                {errors.earningHeaderTitle && <p className='error'>{errors.earningHeaderTitle}</p>}
            </td>
            <td className='font-bold'>
                <input type="text" 
                id="earningHeaderAmount"
                className='outline-none rounded mb-2 input_bg' 
                defaultValue="Amount"
                onChange={(e)=>setEarningHeaderAmount(e.target.value)}
                style={{marginLeft:'17px'}}
                onKeyDown={(e)=>handleEmpIdKeyDown(e,'earningHeaderAmount')}
            />
                 {errors.earningHeaderAmount && <p className='error'>{errors.earningHeaderAmount}</p>}
            </td>
            <td className='font-bold'></td>
          </tr>
        </thead>
        </table>
        {/* Dynamic Header Ended */}

       <table width="100%">
        <tbody>
          <tr>
            <td></td>
            <td>
            <input
                type="text"
                id='earningTitle'
                className='overflow-ellipsis overflow-hidden outline-none'
                value={earningTitle}
                onChange={(e) => setEarningTitle(e.target.value)}
                placeholder='Enter title'
                style={{marginLeft:'17px'}}
                onKeyDown={(e)=>handleEmpIdKeyDown(e,'earningTitle')}
                onFocus={(e)=>handleSubmit(e)}
              />
              {errors.earningTitle && <p className='error'>{errors.earningTitle}</p>}

            </td>

            <td>
            <input
                type="text"
                id='earningAmount'
                className='overflow-ellipsis overflow-hidden outline-none'
                value={earningAmount}
                onChange={(e) => setEarningAmount(e.target.value)}
                placeholder='Enter Amount'
                style={{marginLeft:'17px'}}
                onKeyDown={(e)=>handleEmpIdKeyUp(e,'earningAmount')}
                onFocus={(e)=>handleSubmit(e)}
              />
              {errors.earningAmount && <p className='error'>{errors.earningAmount}</p>}
            </td>
            <td></td>
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
                onClick={(e)=>{handleSubmit(e)}}
              >
                Add Item
              </button>
    {/* Table items */}

    <table width="100%">
      {earningList.map(({id,earningTitle,earningAmount})=>(
      
         <React.Fragment key={id}>
          
          <tbody>
          <tr>
              <td><span style={{marginLeft:'20px'}}>{earningTitle}</span></td>
              <td className='earningAmount1'>{earningAmount}</td>
              <button className='text-red-400 text-xl' onClick={()=>deleteRow(id)}><AiOutlineDelete /></button>

          </tr>
          </tbody>
         </React.Fragment>

      ))}
      </table>
      <table width="100%">
        <tbody>
          <tr className='border-1 border-black'>
            <td></td>
            <td>
              <input
                type="text"
                id='totalEarningTitle'
                className='overflow-ellipsis overflow-hidden outline-none'
                onChange={(e) => setTotalEarningTitle(e.target.value)}
                defaultValue="Total Earning"
                style={{marginLeft:'17px'}}
                onBlur={(e)=>handleSubmit(e)}
              />
            </td>

            <td>
               <input
                type="number"
                id='totalEarningAmount'
                className='overflow-ellipsis overflow-hidden outline-none'
                value={totalEarningAmount}
                placeholder='Total Earning Amount'
                style={{marginLeft:'17px'}}
                readOnly
              /> 
            </td> 
            <td>
                
                </td>
          </tr>
          </tbody>
          </table>
           
    
  </>
  )
}

export default SalaryDetailsEarning
