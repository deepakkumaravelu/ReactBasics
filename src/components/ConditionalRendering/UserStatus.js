import React from 'react'

const UserStatus = (props) => {
  const status=props.isOnline?"Online":"Offline";
  return (
    <div>{status}</div>
  )
}

export default UserStatus;