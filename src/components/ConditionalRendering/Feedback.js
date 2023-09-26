import React from 'react';

const Feedback = (props) => {
  const colorStyle = props.isfeedback === 'positive' ? { color: 'green' } : { color: 'red' };

  return (
    <div>
      <p style={colorStyle}>{props.feedback}</p>
    </div>
  );
};

export default Feedback;
