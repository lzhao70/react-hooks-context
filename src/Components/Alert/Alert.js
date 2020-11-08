import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alert != null && (
      <div className='alert-container'>
        <div className={alertContext.alert.classN}>
          {alertContext.alert.msg}
        </div>
      </div>
    )
  );
};

export default Alert;
