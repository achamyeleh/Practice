
// import { useQuery } from '@apollo/react-hooks';
// import qs from 'query-string';
import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { Icon, Menu } from 'semantic-ui-react';
import './App.css';
import MemeGenerator from './components/MemeGenerator';
import Todos from './components/Todos';
import Footer from './footer';
import Header from './header';
import Home from './home';
import RightSidebar from './sideBar';
import SignUp from './signup';

const gql = require('graphql-tag')

// const USER = gql`
// {
//     userGet(id:1) {
//       firstName
//       lastName
//     }
//   }
// `
const USER = gql`
{
    userGet {
      firstName
      lastName
    }
  }
`
 

const App = () => {
  // console.log('location == ', location.search);
  // const parsed = qs.parse(location.search);
  // console.log('parsed location == ', parsed);
  const { error, loading, data } = useQuery(USER)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {JSON.stringify(error)}</p>;
    if(data) console.log('data ==', data)
  return (
    <div>
      <Todos />
      <MemeGenerator />
      <Footer name="footer"/>
    </div>
    

  );
}

export default App;  //testing git

export function BasicExample() {
  return (
    <Router>
      <div >
        <div className="App-header">
          <span className="headers">
          <Menu.Item > 
          <Link to="/">Gallery</Link>
          </Menu.Item>
          <Menu.Item  >
          <Link to="/registration">Registration</Link>
          </Menu.Item>
          <Menu.Item >
          <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
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



function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Header name='header' />
    </div>
  );
}