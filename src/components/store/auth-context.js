
import React, { useEffect, useState} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: ()=>{},
    onLogin : (email, password) => {}
});

export default AuthContext;


export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{

  const storedUserInfo = localStorage.getItem("loggedInData");

  if (storedUserInfo === "1") {
    setIsLoggedIn(true);
  }




}, []);


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('loggedInData' , "1");
    setIsLoggedIn(true);
    
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("loggedInData")
  };

  return( <AuthContext.Provider
    value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler
    }}
  >
      {props.children}

  </AuthContext.Provider>)

}