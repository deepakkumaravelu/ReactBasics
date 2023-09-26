import React from 'react'

const Notification = (props) => {
    const notification=props.message!=undefined?props.message:"No message";
  return (
    <div>{notification}</div>
  );
}
export default Notification;