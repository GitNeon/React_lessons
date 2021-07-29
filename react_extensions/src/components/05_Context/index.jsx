import React from 'react';

// 创建Context容器
/**
 * Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。
 * Context适用于祖孙关系组件传递
 *
 * @type {React.Context<{}>}
 */
const myContext = React.createContext({});
const {Provider,Consumer} = myContext;

/**
 * 组件A
 * @return {JSX.Element}
 * @constructor
 */
export default function A(){

  let [student,setStudent] = React.useState({id:1,name:'xiaoming'});

  return (
    <div style={{ width: '600px', height: '500px',backgroundColor: 'skyblue'}}>
      <h3>我是组件A</h3>
      <Provider value={student}>
        <B/>
      </Provider>
    </div>)
}

/**
 * 组件B
 * @return {JSX.Element}
 * @constructor
 */
function B(){
  return (
    <div style={{ width: '500px', height: '400px',backgroundColor: 'yellow',margin:'10px'}}>
      <h3>我是组件B</h3>
      <C/>
    </div>)
}

/**
 * 组件C
 * @return {JSX.Element}
 * @constructor
 */
function C(){
  return (
    <div style={{ width: '400px', height: '300px',backgroundColor: 'aliceblue',margin:'10px'}}>
      <p>我是组件C</p>
      <p>我从A组件接收到的内容是：</p>
      <Consumer>
        {
          value => `ID: ${value.id} ---- Name: ${value.name}`
        }
      </Consumer>
    </div>
  )
}
