import React from 'react';

const CurrentDate = () => {
  const date = new Date();
  const todayDate = date.getDate();

  return (
    <div>
      <p>Today's Date: {todayDate}</p>
    </div>
  );
};

export default CurrentDate;
