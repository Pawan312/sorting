import React from 'react'

function Bar({value} ) {
    
  return (
    <>
        <div style={{ height: `${10*value}px` }} className={`border border-black h-${value} w-10 flex justify-center bg-blue-500`}>{value}</div>
    </>
  )
}

export default Bar