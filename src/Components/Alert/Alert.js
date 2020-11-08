import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert != null && (
      <div className='alert-container'>
        <div className={alert.classN}>{alert.msg}</div>
      </div>
    )
  );
};

export default Alert;
