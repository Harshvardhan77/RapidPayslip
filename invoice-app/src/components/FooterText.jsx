import React from 'react'

function FooterText({note,setNote}) {
  return (
    <div className='bg_1 p-2 border-class mt-4 rounded'>
    <div className='w-full'>
         <div className=' h-12'>
            <h2 className='font-bold text-xl ml-5'>Footer Text</h2>
        </div> 
    <div className='lg:w-full md:w-1/2 flex justify-center items-center'>
    <div className=' bg_4 lg:w-1/2 sm:w-1/2 md:w-1/2 p-4 shadow'>
        <textarea 
        className=' px-2 rounded outline-none bg_4'
        name="notes" 
        id="notes" 
        cols="50" 
        value={note}
        onChange={(e)=>(setNote(e.target.value))}
        rows="4" 
        placeholder='Enter the note'></textarea>
      
    </div>
    </div>
    </div>
    </div>
  )
}

export default FooterText
