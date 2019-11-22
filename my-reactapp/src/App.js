import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Donate from './Donate';
import Policy from './Policy';
import ComingSoon from './ComingSoon';
import VeteransPackage from './VeteransPackage';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import VeteranAds from './VeteranAds';


class App extends Component {
  render() {
    return (   
    <Router>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Donate' component={Donate} />
               <Route path='/Policy' component={Policy} />
                <Route path='/ComingSoon' component={ComingSoon} />
                 <Route path='/VeteransPackage' component={VeteransPackage} />
                  <Route path='/Login' component={Login} />
                  <Route path='/ForgotPassword' component={ForgotPassword} />
                   <Route path='/VeteranAds' component={VeteranAds} />
          </Switch>
      </Router>




    );
  }
}

export default App;