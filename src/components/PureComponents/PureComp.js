import React from 'react'

const PureComp = () => {
  const rand=Math.floor(Math.random()*5)+1;
  return (
    <div>Random number = {rand}</div>
  );
}

export default PureComp;