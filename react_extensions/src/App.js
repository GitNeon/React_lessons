import React,{ Component } from 'react';
// import UsualHoc from "./components/08_高阶组件/propsProxy/Usual";
// 高阶组件基本使用
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <UsualHoc data={{name: 'component' }}/>
//             </div>
//         );
//     }
// }

// 属性代理
import FormLogin from "./components/08_高阶组件/example/Form";
class App extends Component {
    render() {
        return (
            <div>
                <FormLogin/>
            </div>
        );
    }
}

export default App;
