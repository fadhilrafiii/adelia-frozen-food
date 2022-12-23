import { createContext } from 'react';

const ClientContext = createContext({
  isClientReady: false,
});

export const ClientContextProvider = ClientContext.Provider;

export default ClientContext;
