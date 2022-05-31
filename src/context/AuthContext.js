import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態の定義
const initialState = {
  // user: null, //ログインしてないですね。
  // user: {
  //   _id: "62301ab54ded0ed0584598e4",
  //   username: "shincode",
  //   email: "shincode@gmail.com",
  //   password: "abcdefg",
  //   profilePicture: "/person/1.jpeg",
  //   coverPicture: "",
  //   followers: [],
  //   followings: [],
  //   isAdmin: false,
  // },
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false, //ログインしようともしてないですね。
  error: false, //エラーも吐いてないですね。
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  //ユーザー入力によって状態(state)が更新され、それをグローバルに利用している。
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //set user data in localstroge
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
