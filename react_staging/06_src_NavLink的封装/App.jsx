import * as React from 'react';
import {Route} from 'react-router-dom'
import MyNavLink from "./component/MyNavLink";
import About from "./pages/About";
import Home from "./pages/Home";

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
            {/* 当导航列表项有很多时，可以对NavLink进行封装，减少冗余代码 */}
            <MyNavLink a={1} b={2} title="About" to="/about" children={About}>About</MyNavLink>
            <MyNavLink title="Home" to="/home" children={Home}>Home</MyNavLink>
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
