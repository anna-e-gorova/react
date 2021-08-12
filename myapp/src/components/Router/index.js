import React, { useState } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Profile from "../Profile";
import Chats from '../Chats';
import { ThemeContext } from "../../utils/ThemeContext";
import HomePage from '../HomePage';

export const Router = () => {
  const [bgColor, setBgColor] = useState("white");
  const changeColor = () => {
    setBgColor((prevColor) => (prevColor === "white" ? "gray" : "white"));
  };
  return (
    <ThemeContext.Provider value={{ theme: bgColor, changeTheme: changeColor }}>
      <BrowserRouter>
      <Link to="/" >HOME</Link>
      <Switch>
        <Route path="/profile"> <Profile /></Route>
        <Route path="/chats/:chatId?/:chatDel?"><Chats /></Route>
        <Route path="/chats/:chatId?"><Chats /></Route>
        <Route path="/nochat"><div> No such chat</div></Route>
        <Route exact path="/" ><HomePage /></Route>
        <Route path="*">
          <h2>404</h2>
        </Route>
      </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};
