import React from "react";

export const AuthContext = React.createContext({
    user: "test", 
    setUser: () => {}
});