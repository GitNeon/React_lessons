// import React,{ Component } from 'react';
// import Mouse from "./components/09_renderProps/Mouse";
//
// class App extends Component {
//     render() {
//         return (
//             <div style={{ height: '100%' }}>
//                 <Mouse render={({ x, y }) => (
//                     <h1>The mouse position is ({x}, {y})</h1>
//                 )}/>
//             </div>
//         );
//     }
// }
//
// export default App;


import React, { Component } from 'react';
import Custom1 from './components/10_平行组件通信/Customer1.js';
import Custom2 from './components/10_平行组件通信/Customer2.js';
import emitter from './components/10_平行组件通信/Evt.js';

class App extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //emit事件触发方法,过事件名称找对应的事件处理函数callCustom，将事件处理函数作为参数传入
        emitter.emit('callCustom', 'Hello 我来发消息了');
    }

    render() {
        return(
            <div>
                <br/>
                <button onClick = {this.handleClick}>点击发布事件</button>
                <Custom1 />
                <Custom2 />
            </div>

        )
    }
}

export default App;
