import React, {Component} from 'react';
import {Link,Route} from "react-router-dom";
import Detail from "./Detail";

class Messages extends Component {

  state = {
    msgList:[{
      id:1,
      title:'消息列表1'
    },{
      id:2,
      title: '消息列表2'
    },{
      id:3,
      title: '消息列表3'
    },{
      id:4,
      title: '消息列表4'
    }]
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.msgList.map(item => {
              return (
                <li key={item.id}>
                  <Link to={{pathname: "/home/messages/detail", state: item}}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        <Route path="/home/messages/detail" component={Detail}/>
      </div>
    )
  }
}

export default Messages;
