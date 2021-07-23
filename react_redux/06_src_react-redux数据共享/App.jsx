import React, { Component } from 'react'
import Count from './container/Count'
import store from "./redux/store";
import Person from "./container/Person";

export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store}/>
        <hr/>
        <Person store={store}/>
      </div>
    )
  }
}
