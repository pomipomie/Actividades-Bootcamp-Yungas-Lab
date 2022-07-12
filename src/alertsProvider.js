import { createContext, useState, useContext } from "react";

export const AlertContext = createContext({
    alert,
    setAlert: () => {},
});

export function AlertContextProvider({children}) {
    const [alert, setAlert] = useState('');

    const addAlert = (alert) => {
        setAlert(alert);
        
    }

    return (
        <AlertContext.Provider value={addAlert}>
          {children}
          <div className="alert" key={alert}>
            {alert}
          </div>
        </AlertContext.Provider>
      );
}

export function useAlertContext() {
    return useContext(AlertContext);
  }