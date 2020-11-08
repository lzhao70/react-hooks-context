import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import { SET_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlertMethod = (msg, classN) => {
    dispatch({ type: SET_ALERT, payload: { msg: msg, classN: classN } });
    setTimeout(() => {
      dispatch({ type: SET_ALERT, payload: null });
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlertMethod: setAlertMethod,
      }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
