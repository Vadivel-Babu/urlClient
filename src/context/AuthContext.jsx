import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = () => {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);
  function handleLogout() {
    setUser(localStorage.removeItem("user"));
    getUser();
  }

  function handleUser(user) {
    setUser(localStorage.setItem("user", JSON.stringify(user)));
    getUser();
  }
  return (
    <AuthContext.Provider value={{ user, handleLogout, handleUser }}>
      {children}
    </AuthContext.Provider>
  );
};
