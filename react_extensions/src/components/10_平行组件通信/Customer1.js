import React from 'react';
import emitter from './Evt.js';

class Custom1 extends React.Component {

    constructor(){
        super();
        this.state= {
            msg:''
        }
    }

    componentDidMount () { //在组件挂载完成后声明一个自定义事件
        emitter.addListener('callCustom', (msg) => {
            this.setState({
                msg: 'Custom1收到消息--'+msg
            });
        })
    }

    componentWillUnmount () { //组件销毁前移除事件监听
        emitter.removeListener('callCustom', (msg) => {
            this.setState({
                msg: 'Custom1即将销毁此消息--'+ msg
            });
        })
    }

    //订阅者1消息显示
    render () {
        return(<p style={{color:'red'}}>
            {this.state.msg}
        </p>)
    }
}
export default Custom1;
