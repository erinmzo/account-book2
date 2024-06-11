import { createContext, useState } from "react";

export const AuthContext = createContext();

const token = localStorage.getItem("accessToken");

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [imgUrl, setImgUrl] = useState("");
  const [nickName, setNickName] = useState("");

  const logIn = (token) => {
    localStorage.setItem("accessToken", token);
    setIsAuthenticated(true);
  };
  const logOut = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };

  const setProfileImg = (img) => {
    setImgUrl(img);
  };
  const setProfileNickName = (nickname) => {
    setNickName(nickname);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        logIn,
        logOut,
        setProfileImg,
        imgUrl,
        setProfileNickName,
        nickName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
