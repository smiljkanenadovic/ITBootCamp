import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getFirst, getSecond } from './services';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { UserList } from './components/UserList';
import { Filter } from './components/Filter';

const App = () => {

  const[users, setUsers] = useState([])

  useEffect(() => {
    getFirst().then(res => setUsers(res.data.data))
    getSecond().then(res => setUsers(pre => pre.concat(res.data.data)))
  }, [setUsers])

  return(
    <Router>
      <nav>
        <Link to="/" style={{margin:'20px'}}>USERS</Link>
        <Link to="/search">SEARCH</Link>
      </nav>
      <Switch>
        <Route path = '/search'>
        <Filter users = {users} setUsers = {setUsers}/>
        </Route>
        <Route path = '/'>
          <UserList users = {users} setUsers = {setUsers}/>
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


