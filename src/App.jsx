import React , { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
// React Router Import
import { Switch, Route} from 'react-router-dom';
//import Pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Details from './components/pages/Details';
import Contacts from './components/pages/Contacts';
import NotFoundPage from './components/pages/NotFoundPage';
class App extends Component {
  render(){
  return (
    <div> 
<Navbar/>
<Switch>
  <Route path="/home" component={Home}/>
  <Route path="/news" component={News}/>
  <Route path="/contacts" component={Contacts}/>
   <Route path="/details" component={Details}/>
   <Route component={NotFoundPage}/>
</Switch>
<Footer/>

    </div>
  );
}
}
export default App;
