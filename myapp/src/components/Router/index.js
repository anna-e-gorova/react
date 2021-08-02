import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Profile } from '../Profile';
import Chats from '../Chats';
import HomePage from '../HomePage';

export const Router = () => {
  return (
    <BrowserRouter>
    <Link to="/" >HOME</Link>
      <Switch>
        <Route
          path="/profile"
          render={(data) => <Profile match={data.match} />}
        ></Route>
        <Route path="/chats/:chatId?/:chatDel?"><Chats /></Route>
        <Route path="/chats/:chatId?"><Chats /></Route>
        <Route exact path="/" ><HomePage /></Route>
        <Route path="*">
          <h2>404</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}