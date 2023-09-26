import React from 'react'

const AgeCheck = (props) => {
    const age=props.age>18?"Adult":"Minor";
  return (
    <div>AgeCheck={age}</div>
  )
}

export default AgeCheck;