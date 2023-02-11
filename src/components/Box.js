import React from 'react'

function Box({heading,information}) {
  return (
    <div style={{textAlign:"center",width:"200px",backgroundColor:"skyblue"}}>
      <h1>{heading}</h1>
      <p>{information}</p>
    </div>
  )
}

export default Box