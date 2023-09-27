import React from 'react'

const Names = (props) => {
    const {names}=props;
  return (
    <div>
    <ul>
    {names.map((nam,index)=>(<li key={index}>{nam}</li>))}
    </ul>
    
    </div>
  )
}

export default Names