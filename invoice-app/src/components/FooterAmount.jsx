import numberToWords from 'number-to-words';
import React, { useEffect } from 'react'

function FooterAmount({subTotal,amountWords,setAmountWords}) {
  useEffect(() => {
    if (typeof subTotal === 'number' && isFinite(subTotal)) {
      setAmountWords(numberToWords.toWords(subTotal));
    } else {
      setAmountWords('Invalid Amount');
    }
  }, [subTotal, setAmountWords]);


  

  return (
       <>
    <div className='bg_1 main_text'>
    <div className='w-full border-class rounded bg_1'>
    <div className='h-12'>
            <h2 className='font-bold text-xl ml-5'>Amount</h2>
        </div> 
    <div className=' bg_1 flex items-center justify-center'>
      <div className=' p-2 flex flex-col w-2/3 bg_4 items-center'>
      <input type="text" 
      id='text'
      className='px-8 p-4 w-1/2 rounded overflow-ellipsis overflow-hidden outline-none border-bottom'
      placeholder='Enter Amount in Number'
      value={subTotal}
      readOnly
      />
      <input type="text" 
      className='overflow-ellipsis overflow-hidden rounded px-8 outline-none p-4 mt-1 w-1/2 border-bottom'
      id='text'
      placeholder='Enter Amount in Words'
      value={amountWords}
      readOnly

      />
      </div>

    </div>
    </div>
    </div>
    </>
  )
}

export default FooterAmount
