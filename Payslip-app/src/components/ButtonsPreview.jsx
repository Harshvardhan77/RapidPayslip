import React from 'react'



function ButtonsPreview({
  setShowPreview,
  downloadWebpage}) {
    const handlePrint =()=>{
        window.print();
    }

    function downloadWebpage2() {
      const clonedDocument = document.documentElement.cloneNode(true);
      const buttons = clonedDocument.querySelectorAll('button');
      buttons.forEach((button) => button.remove());
      const htmlContent = clonedDocument.outerHTML;
    
  
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'webpage.html';
    
  
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    


  return (
    <>
      <section >
        <div className=' m-5 w-full flex justify-center items-center'>
        <button onClick={()=>setShowPreview(false)} className="bg-blue-500 m-5 py-1 text-white px-6
        rounded shadow font-bold border-2 border-blue-500 hover:bg-transparent 
         hover:text-blue-500 transition-all duration-300 print-button" >Check Details</button>
        <button onClick={(e)=>downloadWebpage2(e)} className="bg-blue-500 py-1 text-white px-6
        rounded shadow font-bold border-2 border-blue-500 m-5 hover:bg-transparent 
         hover:text-blue-500 transition-all duration-300 print-button" >Download</button>
        <button onClick={handlePrint} className="bg-blue-500 py-1 text-white px-6
        rounded shadow font-bold border-2 border-blue-500 m-5 hover:bg-transparent 
         hover:text-blue-500 transition-all duration-300 print-button" >Print</button>
        <button onClick={(e)=>downloadWebpage(e)} className="bg-blue-500 py-1 text-white px-6
        rounded shadow font-bold border-2 border-blue-500 m-5 hover:bg-transparent 
         hover:text-blue-500 transition-all duration-300 print-button" >Download PDF</button>
        </div>
        </section>
    </>
  )
}

export default ButtonsPreview
