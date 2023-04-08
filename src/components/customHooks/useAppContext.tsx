import React, { useContext } from "react";
import { AppContextProps } from "../../types/AppContextProps";
import AppContext from "../../context/AppContext";

export default function useAppContext() {
  const value = useContext<AppContextProps>(AppContext);

  return value;
}
