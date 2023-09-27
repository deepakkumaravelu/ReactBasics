import React from 'react'

const Clock = () => {
  const time=new Date();
  const t=time.getHours();
  const m=time.getMinutes();
  const s=time.getSeconds();
  return (
    <div>{t}:{m}:{s}</div>
  )
}

export default Clock;