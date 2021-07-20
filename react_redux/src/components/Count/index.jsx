import React, {Component} from 'react';

class Count extends Component {

  state = {
    count: 0
  }

  calcNumber = (char)=>{
    let { value } = this.selectNumber;
    let { count } = this.state;
    switch (char) {
      case '+':
        this.setState({ count: count + value*1 });
        break
      case '-':
        this.setState({ count: count - value*1 });
        break
      default:
        return false
    }

  }

  evenAdd = ()=>{
    let { value } = this.selectNumber;
    let { count } = this.state;
    if(value % 2 !== 0){
      this.setState({ count: count + value*1 });
    }
  }

  asyncAdd = ()=>{
    let { value } = this.selectNumber;
    let { count } = this.state;
    let this_ = this;
    setTimeout(function () {
      this_.setState({ count: count + value*1 });
    },500)
  }

  render() {
    let { count } = this.state;
    return (
      <div>
        <h2>当前计算结果为：{count}</h2>
        <span>选择计算数</span>
        <select name="numbers" id="number-select" ref={r => this.selectNumber = r }>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={() => {this.calcNumber('+')}}>+</button>
        <button onClick={() => {this.calcNumber('-')}}>-</button>
        <button onClick={this.evenAdd}>选择数为奇数加</button>
        <button onClick={this.asyncAdd}>异步加</button>
      </div>
    );
  }
}

export default Count;
