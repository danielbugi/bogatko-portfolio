import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

// eslint-disable-next-line react/prop-types
export const SidebarProvider = ({ children }) => {
  const [btnActive, setBtnActive] = useState(false);

  const activeSideBtn = () => {
    setBtnActive(!btnActive);
  };

  return (
    <SidebarContext.Provider value={{ activeSideBtn, btnActive }}>
      {children}
    </SidebarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
