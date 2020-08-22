import React from 'react';

export const FormSuccess = (props) => {
  return (
    <div>
      <h1>Success</h1>
      <button onClick={() => props.setState('email')}>Back</button>
    </div>
  );
};
