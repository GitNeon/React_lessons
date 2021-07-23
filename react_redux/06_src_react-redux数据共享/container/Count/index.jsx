import React, {Component} from 'react';
import {connect} from "react-redux";
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction
} from "../../redux/action/count_action";

class Count extends Component {

  calcNumber = (char)=>{
    const { value } = this.selectNumber;
    console.log(this.props);
    if(char === '+'){
      this.props.increment(value);
    }else if(char === '-'){
      this.props.decrement(value);
    }
  }

  evenAdd = ()=>{
    const { value } = this.selectNumber;
    if(value % 2 !== 0){
      this.props.increment(value);
    }
  }

  asyncAdd = ()=>{
    const { value } = this.selectNumber;
    this.props.asyncIncrement(value,500);
  }

  render() {
    return (
      <div>
        <h2>当前计算结果为：{this.props.count}</h2>
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

export default connect( (state) => {
  return {
    count: state.countNumber,
    personList: state.personList
  }
},{
  increment: createIncrementAction,
  decrement: createDecrementAction,
  asyncIncrement: createIncrementAsyncAction
})(Count)
