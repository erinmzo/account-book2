import { createContext, useState } from "react";

export const AuthContext = createContext();

const token = localStorage.getItem("accessToken");

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [imgUrl, setImgUrl] = useState("");

  const logIn = (token) => {
    localStorage.setItem("accessToken", token);
    setIsAuthenticated(true);
  };
  const logOut = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };

  const setProfile = (img) => {
    setImgUrl(img);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, logIn, logOut, setProfile, imgUrl }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
