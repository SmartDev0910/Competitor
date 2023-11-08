import React, {useState, useEffect, createContext, useContext} from 'react';

// Create a new context
export const ModalContext = createContext();

// Create a Provider component for this context
export const ModalProvider = ({children}) => {
  const [showNavModal, setShowNavModal] = useState(true);
  const [ticketAssignName, setTicketAssignName] = useState('');
  const [ticketAssignEmail, setTicketAssignEmail] = useState('');
  const [showScratchView, setShowScratchView] = useState(false);

  return (
    <ModalContext.Provider
      value={[
        showNavModal,
        setShowNavModal,
        ticketAssignName,
        setTicketAssignName,
        ticketAssignEmail,
        setTicketAssignEmail,
        showScratchView,
        setShowScratchView,
      ]}>
      {children}
    </ModalContext.Provider>
  );
};
