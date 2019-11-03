import React, { createContext, useState } from "react";
const Contexto = createContext();

const Provider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(false);

  const value = {
    autenticado,
    activateAuth: () => {
      setAutenticado(true);
    }
  };

  return <Contexto.Provider value={value}>{children}</Contexto.Provider>;
};

export default {
  Provider,
  Consumer: Contexto.Consumer
};
