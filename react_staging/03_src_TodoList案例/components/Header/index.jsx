import React, {Component} from 'react';
import './index.css';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={e => this.handleKeyUp(e)}/>
            </div>
        );
    }

    handleKeyUp = (e) => {
        if (e.key === "Enter"){
           if(e.target.value.trim() === ''){
               return alert('输入的内容不能为空');
           }
           let find = this.props.taskList.find(item => e.target.value === item.name );
           console.log(find);
           if(find !== undefined){
               return alert('任务已存在');
           }
           this.props.parent.addTask(this,e.target.value);
           e.target.value = '';
        }
    }
}

export default Header;
