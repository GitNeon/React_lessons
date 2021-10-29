import * as React from 'react';
import { Link,Route } from 'react-router-dom'
import About from "./pages/About";
import Detail from "./pages/Detail";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/detail">Detail</Link></li>
        </ul>
        <hr/>
        <div>
          <Route path="/about" component={About} exact/>
          <Route path="/detail" component={Detail}/>
        </div>
      </div>
    );
  }
}
