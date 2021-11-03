// 普通组件Login
import React, { Component } from 'react';
import formCreate from './FormHoc';


class Login extends Component {
    render() {
        console.log('Form组件render了，接收到的属性props:',this.props);
        return (
            <div>
                <div>
                    <label id="username">
                        账户
                    </label>
                    <input name="username" onChange={(e) => this.props.getField('username',e)}/>
                </div>
                <div>
                    <label id="password">
                        密码
                    </label>
                    <input name="password" onChange={(e) => this.props.getField('password',e)}/>
                </div>
                <button onClick={this.props.handleSubmit}>提交</button>
            </div>
        )
    }
}

export default formCreate(Login)
