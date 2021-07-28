import React, {Component} from 'react';
import Count from "./Count";
import CountF from "./CountF";
class Index extends Component {
  render() {
    return (
      <div>
        <h3>类式组件实现的功能</h3>
        <Count/>
        <hr/>
        <h3>函数式组件实现的功能</h3>
        <CountF/>
      </div>
    );
  }
}

export default Index;
