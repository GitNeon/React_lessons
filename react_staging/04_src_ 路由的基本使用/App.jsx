import * as React from 'react';
import { Link,Route } from 'react-router-dom'
import About from "./component/About";
import Home from "./component/Home";

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
            {/*    <div className="list-group">
                  <a className="list-group-item" href="./about.html">About</a>
                  <a className="list-group-item active" href="./home.html">Home</a>
                </div>*/}
                <Link className="list-group-item" to="/about">About</Link>
                <Link className="list-group-item" to="/home">Home</Link>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*<h3>我是Home的内容</h3>*/}
                <Route path="/about" component={About} exact/>
                <Route path="/home" component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
