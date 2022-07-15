import { notifications } from '@syncfusion/ej2';
import React, { createContext, useContext, useState } from 'react';
import { userProfileData } from '../data/dummy';

const StateContext = createContext();

const initialState = {
  chat:false,
  cart:false,
  userProfileData: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {
  
  const [activeMenu, setActiveMenu] = useState(true);

  
  return (
    <StateContext.Provider
      value={{activeMenu, setActiveMenu,}}
    >
      { children }
    </StateContext.Provider>
  )
}

// pass in which context wanted to use
export const useStateContext = () => useContext(StateContext)