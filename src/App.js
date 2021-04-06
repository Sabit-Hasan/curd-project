import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import { createContext, useState } from 'react';
import Delete from './components/Delete/Delete';
import Read from './components/Read/Read';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';

export const UserContext = createContext()

function App() {

  const [users, setUsers] = useState([
    {id: '1', name: 'Salman', position: 'Front End Dev', salary: 28000},
    {id: '2', name: 'Shuvo', position: 'Data Scientist', salary: 26000},
    {id: '3', name: 'Mahadi', position: 'Full stack Dev', salary: 30000}
  ]);

  return (

    <UserContext.Provider value={[users, setUsers]}>
      <Router>
        <Switch>
        <Route path="/edit/:id">
          <Edit />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/read/:id">
          <Read />
        </Route>
        <Route path="/delete/:id">
            <Delete />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;