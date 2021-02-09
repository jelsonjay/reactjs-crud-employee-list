import React from 'react'
import {Switch, Route} from 'react-router'
import './App.css';
import AddEmployee from './components/AddEmployee/add';
import EditEmployee from './components/EditEmployee/edit';
import Home from './components/Home';
import {DataProvider} from './components/Context/GlobalState'

function App() {
  return (
    <div className="App">
    <DataProvider>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/add' component={AddEmployee}/>
    <Route path='/edit/:id' component={EditEmployee}/>
    </Switch>
    </DataProvider>
    </div>
  );
}

export default App;
