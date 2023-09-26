import React from 'react'

const Loading = (props) => {
  const content=props.isLoading?"Loading...":props.content;
  return (
    <div>{content}</div>
  )
}

export default Loading;