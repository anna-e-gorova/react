import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Profile from "../Profile";
import Chats from '../Chats';
import { ThemeContext } from "../../utils/ThemeContext";
import HomePage from '../HomePage';
import { News } from "../News";
import { PrivateRoute } from "../../hocs/PrivateRoute";
import { PublicRoute } from "../../hocs/PublicRoute";
import { Login } from "../Login";
import { connectProfileToFB } from "../../store/profile/actions";
import { Logout } from "../Logout";

export const Router = () => {
  const [bgColor, setBgColor] = useState("white");
  const changeColor = () => {
    setBgColor((prevColor) => (prevColor === "white" ? "gray" : "white"));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(connectProfileToFB());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: bgColor, changeTheme: changeColor }}>
      <BrowserRouter>
      <Link to="/" >HOME</Link>
      <Logout />
      <Switch>
        <PrivateRoute path="/profile"> <Profile /></PrivateRoute>
        <PublicRoute path="/news"><News /></PublicRoute>
        <PrivateRoute path="/chats/:chatId?/:chatDel?"><Chats /></PrivateRoute>
        <PrivateRoute path="/chats/:chatId?"><Chats /></PrivateRoute>
        <PrivateRoute path="/nochat"><div> No such chat</div></PrivateRoute>
        <Route exact path="/" ><HomePage /></Route>
        <PublicRoute path="/login" exact><Login /></PublicRoute>
        <PublicRoute path="/signup" exact><Login isSignUp /></PublicRoute>
        <Route path="*"><h2>404</h2></Route>
      </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};
