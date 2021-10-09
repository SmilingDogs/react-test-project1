import React, { createContext, useReducer } from "react";
import { AppReducer } from "./Appreducer";

const initialState = {
  newClass: "",
  connection: "",
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const hideNestedAction = () => {
    dispatch({ type: "HIDE" });
  };
  const showNestedAction = () => {
    dispatch({ type: "SHOW" });
  };
  return (
    <GlobalContext.Provider
      value={{
        newClass: state.newClass,
        connection: state.connection,
        hideNestedAction,
        showNestedAction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
