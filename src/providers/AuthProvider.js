import React, {useState, createContext} from 'react';

// Create a new context
export const AuthContext = createContext();

// Create a Provider component for this context
export const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={[isAuth, setIsAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
