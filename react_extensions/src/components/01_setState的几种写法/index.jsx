import React, {Component} from 'react';

class Index extends Component {

  state = {
    count: 0
  }

  add = () => {
    // 方法一：直接通过对象形式更新值
    // this.setState({count: state.count + this.props.increment });

    // 方法二：通过函数
    this.setState( (state,props) => {
      return { count: state.count + this.props.increment };
    },() => {
      console.log(this.state.count)
    })
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    );
  }
}

export default Index;
