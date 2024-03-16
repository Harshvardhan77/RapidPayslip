import React from 'react'

function ButtonDetails({
     handleSubmitMain,
     downloadWebpage
}) {
  return (
          <div className='w-full flex justify-center items-center bg-white'>    
      <ul>
        <button onClick={(e) => handleSubmitMain(e)}
        className="bg-blue-500 m-5 py-1 text-white px-6
        rounded shadow font-bold border-2 border-blue-500 hover:bg-transparent
        hover:text-blue-500 transition-all duration-300"
        >Preview Payslip</button>

        <button onClick={(e)=>{downloadWebpage(e)
        handleSubmitMain(e)}}
        className="bg-blue-500 py-1 text-white px-6
        rounded shadow font-bold border-2 border-blue-500 m-5 hover:bg-transparent 
         hover:text-blue-500 transition-all duration-300"
         disabled>Download</button>

        <button 
        onClick={(e)=>handleSubmitMain(e)}
        className="bg-blue-500 py-1 text-white px-6
        rounded shadow font-bold border-2 border-blue-500 m-5 hover:bg-transparent 
         hover:text-blue-500 transition-all duration-300"
         disabled >Print</button>
 </ul>
    </div>
  )
}

export default ButtonDetails
