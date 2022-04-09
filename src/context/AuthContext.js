import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態の定義
const initialState = {
  user: null, //ログインしてないですね。
  isFetching: false, //ログインしようともしてないですね。
  error: false, //エラーも吐いてないですね。
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  //ユーザー入力によって状態(state)が更新され、それをグローバルに利用している。
  const [state, dispatch] = useReducer(AuthReducer, initialState);
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
