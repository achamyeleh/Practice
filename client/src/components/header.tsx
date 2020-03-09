import React, { FC } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Icon, Menu } from 'semantic-ui-react';
import Home from './home';
import RightSidebar from './sideBar';
import SignUp from './Signup';
type Props = {
  mobile: boolean
}
const Header: FC<Props> = (Props) => {
  return (
    <Router>
    <div >
      <div className="App-header">
        <span className="headers">
        <Link to="/">Gallery</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/dashboard">Dashboard</Link>
        </span> <span className="bar">
        <Menu.Item >
        <Icon name="bars" />
        </Menu.Item>
        </span>
      </div>


      <Switch>
        <Route exact path="/">
          <Home name="Acham"/>
        </Route>
        <Route path="/registration">
          <SignUp />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/sidebar">
          <RightSidebar />
        </Route>
      </Switch>
    </div>
  </Router>
);
}
export default Header


function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      < h1>this is </h1>
    </div>
  );
}