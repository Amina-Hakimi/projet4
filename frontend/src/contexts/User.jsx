import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState();

  const handleUser = (data) => {
    setUser(data);
  };
  return (
    <UserContext.Provider value={{ user, handleUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default {
  UserContext,
  UserProvider,
};
