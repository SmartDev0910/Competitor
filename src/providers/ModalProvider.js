import React, {useState, useEffect, createContext, useContext} from 'react';

// Create a new context
export const ModalContext = createContext();

// Create a Provider component for this context
export const ModalProvider = ({children}) => {
  const [showNavModal, setShowNavModal] = useState(true);
  const [ticketAssignName, setTicketAssignName] = useState('');
  const [ticketAssignEmail, setTicketAssignEmail] = useState('');

  return (
    <ModalContext.Provider
      value={[
        showNavModal,
        setShowNavModal,
        ticketAssignName,
        setTicketAssignName,
        ticketAssignEmail,
        setTicketAssignEmail,
      ]}>
      {children}
    </ModalContext.Provider>
  );
};
