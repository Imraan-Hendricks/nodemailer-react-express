import React from 'react';

export const Form = (props) => {
  return (
    <div>
      <h1>Email</h1>
      <button onClick={() => props.setState('success')}>Submit</button>
    </div>
  );
};
