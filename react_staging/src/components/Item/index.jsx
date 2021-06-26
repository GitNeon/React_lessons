import React, {Component} from 'react';
import './index.css';

class Item extends Component {

    state = {
        mouse: false,
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={this.props.item.done} onChange={this.changData}/>
                    <span>{this.props.item.name}</span>
                </label>
                <button onClick={this.handleDelete(this.props.item.id)} className="btn btn-danger" style={{display: this.state.mouse ? 'block' : 'none'}}>删除</button>
            </li>
        );
    }

    changData = ()=>{
        this.props.item.done = !this.props.item.done;
        this.props.parent.getItemData(this,this.props.item);
    }

    handleMouse = (flag) => {
       return ()=>{
           console.log(flag);
           this.setState({ mouse: flag });
       }
    }

    handleDelete = (id) => {
        return ()=> {
            if(window.confirm('确定删除这个任务?')){
                console.log('id:',id);
                this.props.parent.getDeleteData(this,id);
            }
        }
    }

}

export default Item;
