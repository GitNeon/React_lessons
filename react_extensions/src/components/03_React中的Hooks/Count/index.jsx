import React, {Component} from 'react';
import ReactDOM from 'react-dom'

/**
 * 基于类式组件实现的求和功能
 */
class Count extends Component {
  state = {count:0}

  myRef = React.createRef()

  add = ()=>{
    this.setState(state => ({count:state.count+1}))
  }

  unmount = ()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  show = ()=>{
    alert(this.myRef.current.value)
  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState( state => ({count:state.count+1}))
    },1000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myRef}/>
        <h2>当前求和为{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.unmount}>卸载组件</button>
        <button onClick={this.show}>点击提示数据</button>
      </div>
    )
  }
}

export default Count;
