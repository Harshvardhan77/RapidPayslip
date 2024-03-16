import React from 'react'
import FooterAmount from './FooterAmount'
import FooterText from './FooterText'

function FooterDetails({note,setNote,subTotal,amountWords, setAmountWords}) {
  return (
    <>
    <div className='mt-5 main_text mb-1'>
      <div className='h-12 bg_2 font-bold text-3xl flex justify-center items-center'>
        Footer Details
      </div>
      <div className='p-4'>
    <FooterAmount subTotal={subTotal} amountWords={amountWords} setAmountWords={setAmountWords}/>
    <FooterText note={note} setNote={setNote}/>
    </div>
    </div>
  
    </>
  )
}

export default FooterDetails
