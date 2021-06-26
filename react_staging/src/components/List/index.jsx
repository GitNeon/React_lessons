import React, {Component} from 'react';
import Item from "../Item";
import './index.css';

class List extends Component {

    constructor(props){
        super(props);
    }

    render() {

        let items = this.props.taskList.map(item => {
            return <Item key={item.id} item={item} parent={this}/>
        })

        return (
            <ul className="todo-main">
                {items}
            </ul>
        );
    }

    getItemData(result,data){
        const taskList = this.props.taskList;
        console.log('result: ',result);
        console.log('data:',data);
        let mapResult = taskList.map(item => item.id === data.id ? {...item,...data} : item);
        this.props.parent.getListComponentData(this,mapResult);
    }

    getDeleteData(thisType,data){
        console.log('getDeleteData:',thisType,data);
        this.props.parent.deleteTask(this,data);
    }
}

export default List;
