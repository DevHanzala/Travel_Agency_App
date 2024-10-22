// AuthContextProvider.js
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    userInfo: {
      name: "",
      photoURL: "",
      email: "",
    },
  });
  const [loading, setLoading] = useState(true);

  // Handle user state changes
  function onAuthChanged(user) {
    if (user) {
      setUser({
        isLogin: true,
        userInfo: {
          name: user.displayName || "", // Default to an empty string if displayName is not available
          photoURL: user.photoURL || "", // Default to an empty string if photoURL is not available
          email: user.email || "", // Default to an empty string if email is not available
        },
      });
    } else {
      setUser({ isLogin: false, userInfo: { name: "", photoURL: "", email: "" } });
    }
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthChanged);
    return () => subscriber(); // Unsubscribe on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
