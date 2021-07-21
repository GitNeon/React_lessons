import React, {Component} from 'react';
// 引入store，用于获取redux中保存状态
import store from '../../redux/store';
// 引入动作对象
import {createIncrementAction,createDecrementAction} from "../../redux/count_action";

class Count extends Component {

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    })
  }

  calcNumber = (char)=>{
    const { value } = this.selectNumber;
    if(char === '+'){
      store.dispatch(createIncrementAction(value));
    }else {
      store.dispatch(createDecrementAction(value));
    }
  }

  evenAdd = ()=>{
    const { value } = this.selectNumber;
    if(value % 2 !== 0){
      store.dispatch(createIncrementAction(value));
    }
  }

  asyncAdd = ()=>{
    const { value } = this.selectNumber;
    setTimeout(function () {
      store.dispatch(createIncrementAction(value));
    },600)
  }

  render() {
    return (
      <div>
        <h2>当前计算结果为：{store.getState()}</h2>
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
