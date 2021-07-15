import * as React from 'react';
import {NavLink, Route,Redirect} from 'react-router-dom'
import About from "./pages/About/index";
import Home from "./pages/Home/index";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/home">Home</NavLink>
              <NavLink className="list-group-item" to="/about">About</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*<h3>我是Home的内容</h3>*/}
                <Route path="/about" component={About} exact/>
                <Route path="/home" component={Home}/>
                <Redirect to="/home/news" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
