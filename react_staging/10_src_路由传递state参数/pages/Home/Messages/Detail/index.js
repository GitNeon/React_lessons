import React, {Component} from 'react';

class Detail extends Component {

  state = {
    contentList:[{
      id:1,
      content:'消息内容1'
    },{
      id:2,
      content: '消息内容2'
    },{
      id:3,
      content: '消息内容3'
    }]
  }

  render() {

    console.log('props:',this.props);
    const state = this.props.location.state;
    const find = this.state.contentList.find(item => item.id === state.id);
    if(find !== undefined){
      return (
        <div>
          <ul>
            <li>ID:{find.id}</li>
            <li>Title:{state.title}</li>
            <li>Content:{find.content}</li>
          </ul>
        </div>)
    }

    return (
      <div>
        <h3>暂无消息</h3>
      </div>
    )
  }
}

export default Detail;
