import React,{ Component } from 'react';
import UsualHoc from "./components/08_高阶组件/propsProxy/Usual";

// 高阶组件基本使用
class App extends Component {
    render() {
        return (
            <div>
                <UsualHoc data={{name: 'component' }}/>
            </div>
        );
    }
}

export default App;
