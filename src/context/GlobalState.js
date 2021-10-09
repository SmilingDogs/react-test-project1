import React, { createContext, useReducer } from "react";
import { AppReducer } from "./Appreducer";

//* create initialState

const initialState = {
  newClass: ""
};

//* создаем Context - аналог Стора(редакса)  И  -  компонент GlobalContextProvider, в который необходимо обернуть все приложение чтобы все компоненты получили доступ к (стейт)

export const GlobalContext = createContext(initialState);


export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //* Creating Action

  const hideNestedAction = () => {
    dispatch({ type: "HIDE" });
  };

  return (
    <GlobalContext.Provider
      value={{
        newClass: state.newClass, //! передаем Стейт в Провайдер, чтобы использовать в разных компонентах
        hideNestedAction //! ТОчно также - передаем функции в Провайдер

      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
//todo <GlobalContext.Provider> берется из названия context (GlobalContext в данном случае) + .Provider - технический компонент
