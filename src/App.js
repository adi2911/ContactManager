import React from 'react';
import './App.css';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactsN from './components/ContactsN';
import Header from './components/Header';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import store from './Store';
import About from './components/About';
import NotFound from './components/NotFound';
import {Provider} from 'react-redux';
function App() {
  return (
  <Provider store={store}><Router>
    <div className="App">
      <Header branding="Contact Manager"/>
      <div className="container">
        <Switch>
        <Route exact path="/" component={ContactsN}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact/add" component={AddContact}/>
        <Route exact path="/contact/edit/:id" component={EditContact}/>
        <Route component={NotFound}/>
        </Switch>
         </div>
    </div>
    </Router>
    </Provider>  );
}

export default App;
