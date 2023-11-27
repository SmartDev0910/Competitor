import React, {useState, createContext} from 'react';

// Create a new context
export const ModalContext = createContext();

// Create a Provider component for this context
export const ModalProvider = ({children}) => {
  const [showNavModal, setShowNavModal] = useState(true);
  const [ticketAssignName, setTicketAssignName] = useState('');
  const [ticketAssignEmail, setTicketAssignEmail] = useState('');
  const [showScratchView, setShowScratchView] = useState(false);
  const [competitionNumberData, setCompetitionNumberData] = useState(null);

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
        competitionNumberData,
        setCompetitionNumberData,
      ]}>
      {children}
    </ModalContext.Provider>
  );
};
