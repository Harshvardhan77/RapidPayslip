import React from 'react'

function NotePreview({
  note,
  setNote
}) {
  return (
    <>
    <section className='flex justify-left'>
        <div className='w-1/2 h-auto min-h-20 payslip-color-2 rounded mt-2 border-2 border-black'>
        <p>{note}</p>
        </div>
    </section>
    </>
  )
}

export default NotePreview
