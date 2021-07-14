import * as React from 'react';
import {Link, NavLink, Route} from 'react-router-dom'
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
         {/*   <Link className="list-group-item" to="/about">About</Link>
            <Link className="list-group-item" to="/home">Home</Link>*/}
            {/*使用NavLink可以触发当前选中的css样式，其原理就是自动会在className上添加active类*/}
            <NavLink className="list-group-item" to="/about">About</NavLink>
            <NavLink className="list-group-item" to="/home">Home</NavLink>
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
