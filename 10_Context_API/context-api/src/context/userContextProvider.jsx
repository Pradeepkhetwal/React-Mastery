import React, { useState } from "react";

import UserContext from "./userContext";

// Provider means jitne bhi components hum iske andar likhenge unko global state ka access mil jayega.
// So to create provider we have 2 methods.So as this provider k andar we will have the jsx element so the extension for the provider will be .jsx

// children here is a generic name (jaruri nahi hai ye hi use karo) , children here is generally containing prop jo bhi ayega.

// Look here children can be any component like a card or any other component so we just need to simply render it as it is and we need to wrap it inside the UserContext so that we can provide it the access to global states. So here in the UserContext we specifically use Provider method and here we have passed an object jiske andar we are passing user, setUser such that ab jo bhi children(component) render hoga usko inka(user, setUser) ka access mil jayega(You can pass anything jiska bhi aap access dena chahte ho.)
const userContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default userContextProvider;
