import React, {Component,Fragment} from 'react';

class Index extends Component {

  state = {
    fruitList:[{
      id: 1,
      name: 'apple'
    },{
      id: 2,
      name: 'banana',
    }]
  }

  render() {

    const fruitList = this.state.fruitList;

    return (
      <Fragment>
        <h2>通过Fragment标签不生成新的DOM节点，不会创建组件最外层的div</h2>
        <h3>水果列表：</h3>
        {
          fruitList.map(item => <li key={item.id}>{item.id} --- {item.name}</li>)
        }
      </Fragment>
    );
  }
}

export default Index;
