import React, { useState, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AppContextProps } from '../types/AppContextProps';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppContext = React.createContext<AppContextProps>({isMenuCollapsed: false, handleIsMenuCollapsed:() => null});

const LOCAL_STORAGE_MENU_KEY = 'is-menu-collapsed';

const getIsMenuCollapsed = () => {
  return localStorage.getItem(LOCAL_STORAGE_MENU_KEY);
};

const saveIsMenuCollapsed = (state: string) => {
  localStorage.setItem(LOCAL_STORAGE_MENU_KEY, state);
};

export function AppProvider({ children }: AppProviderProps) {
  const isDesktop = useMediaQuery({
    query: '(min-width: 576px)'
  });
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(
    isDesktop ? getIsMenuCollapsed() === 'closed' : true
  );

  const value = useMemo(
    () => ({
      isMenuCollapsed,
      handleIsMenuCollapsed: () => {
        if (isMenuCollapsed) {
          saveIsMenuCollapsed('open');
        } else {
          saveIsMenuCollapsed('closed');
        }
        setIsMenuCollapsed(!isMenuCollapsed);
      }
    }),
    [isMenuCollapsed]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContext;