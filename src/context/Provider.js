import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import contacts from './reducers/constacts';
import contactInitialState from './initialsStates/contactInitialState';
import authInitialState from './initialsStates/authInitialState';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, ContactsDispatch] = useReducer(
    contacts,
    contactInitialState,
  );
  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, ContactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
