import React,{ Component } from 'react';
import {NavLink,Route,Redirect} from "react-router-dom";
import News from "./News";
import Messages from "./Messages";

export default class Home extends Component {

  render() {
    return (
      <div>
        <h2>这是主页Home</h2>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="/home/news">News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="/home/Messages">Messages</NavLink>
          </li>
        </ul>
        <Route path="/home/news" component={News}/>
        <Route path="/home/Messages" component={Messages}/>
        <Redirect to="/home/news"/>
      </div>
    );
  }

}
