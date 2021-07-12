import React, {Component} from 'react';
import './index.css'

class Footer extends Component {

    inputRef = React.createRef();

    constructor(props) {
        super(props);
    }

    render() {
        const all = this.props.taskList.length;
        const arr = this.props.taskList.filter(item => {
            return item.done === true;
        })

        let flag = this.props.taskList.every(item => {
            return item.done === true;
        });

        return (
            <div className="todo-footer">
                <label>
                    <input ref={this.inputRef} type="checkbox" onChange={this.handleAllChange} checked={flag}/>
                </label>
                <span>
                  <span>已完成{arr.length}</span> / 全部{all}
                </span>
                <button className="btn btn-danger" onClick={this.clearAllTask}>清除已完成任务</button>
            </div>
        );
    }

    handleAllChange = ()=>{
        console.log(this.inputRef.current);
        console.log('checked:',this.inputRef.current.checked);
        this.props.parent.allDone(this,this.inputRef.current.checked);
    }

    clearAllTask = ()=>{
        this.props.parent.clearAllTask();
    }
}

export default Footer;
