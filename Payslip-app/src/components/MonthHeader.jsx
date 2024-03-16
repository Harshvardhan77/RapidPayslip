import React from 'react'

function MonthHeader({
  headerTitle,
  payMonth
}) {
  return (
    <div>
       <section>
            <div className='w-full h-12 border-black border-2 rounded payslip-color-2 flex justify-center items-center mb-2'>
                <h2 className='font-bold text-xl'>{headerTitle} for the month {payMonth}</h2>

            </div>
        </section>
    </div>
  )
}

export default MonthHeader
