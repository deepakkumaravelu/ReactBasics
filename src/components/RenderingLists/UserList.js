import React from 'react';

const UserList = ({val}) => {
  return (
    <div>
    <ul>
      {val.map((nam,index)=>(<li key={index}>Name={nam.name}, Email= {nam.email}</li>))}
      </ul>
    </div>
  );
}

export default UserList;
