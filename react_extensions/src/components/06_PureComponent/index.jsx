import React, {Component,PureComponent} from 'react';

/**
 * 如果一个组件的属性和状态都没有发生变化，重新渲染组件是没有必要的，此时应当使用PureComponent
 */
class Index extends Component {

  state = {
    personList:[{
      id: 1,
      name: 'xiaoMing'
    },{
      id: 2,
      name: 'John Smith'
    },{
      id: 3,
      name: 'XiaoZhang'
    }],
    carName: '摩托车'
  }

  addPerson = ()=> {
    const personList = this.state.personList;
    this.setState({personList: [...personList,{id:personList.length + 1,name:this.inputRef.value}]})
  }

  /**
   * 使用PureComponent,render只会调用一次，因为它会帮我们对比当前属性的状态，只是浅对比
   */
  changeCarName = ()=> {
    console.log('changeCarName...')
    this.setState({
      carName:'自行车'
    })
  }

  /**
   * 如果不使用PureComponent，那么我们应该在这个方法里做判断
   * @param nextProps
   * @param nextState
   * @param nextContext
   */
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('当前状态：',this.state,'---',this.props);
    console.log('已修改状态：',nextState,'---',nextProps);
    // 判断状态内容是否一致
    if(this.state.carName === nextState.carName){
      return false;
    }
    return true;
  }

  render() {
    console.log('is render...');
    return (
      <div>
        姓名：<input type="text" ref={c => this.inputRef = c}/>
        <button onClick={this.addPerson}>添加人员</button>
        <p>车的名字：{this.state.carName} --- <button onClick={this.changeCarName}>更改车的名字</button></p>
        <h2>人员列表：</h2>
        <ul>
          {
            this.state.personList.map(item => {
              return <li key={item.id}>ID:{item.id} ---- Name:{item.name}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Index;
