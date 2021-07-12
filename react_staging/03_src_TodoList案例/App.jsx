import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

class App extends Component {

    state = {
        taskList:[
            {
                id:1,
                name:'吃饭',
                done:true
            },
            {
                id:2,
                name:'睡觉',
                done:false
            },
            {
                id:3,
                name:'打豆豆',
                done:false
            }
        ]
    }

    getListComponentData(thisType,data){
        console.log('thisType: ',thisType);
        console.log('data: ',data);
        this.setState({
            taskList: data
        });
    }

    deleteTask(thisType,id){
        let tempArray = this.state.taskList.filter(item => {
            return item.id !== id;
        })
        console.log('tempArray: ',tempArray);
        this.setState({
            taskList: tempArray
        })
    }

    addTask(thisType,value){
        let tempArray = this.state.taskList;
        let obj = {
            id: tempArray[tempArray.length - 1].id + 1,
            name: value,
            done: false
        }
        tempArray.push(obj);
        this.setState({
            taskList: tempArray
        })
    }

    allDone(thisType,checked){
        let tempArray = this.state.taskList;
        let list = tempArray.map(item => {
            return {...item,done: checked};
        });
        this.setState({
            taskList: list
        })
    }

    clearAllTask(){
        let tempArray = this.state.taskList;
        let list = tempArray.map(item => {
            if(item.done === true){
                return {...item,done: false};
            }else {
                return item;
            }
        });
        this.setState({
            taskList: list
        })
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header taskList={this.state.taskList} parent={this}/>
                    <List taskList={this.state.taskList} parent={this}/>
                    <Footer taskList={this.state.taskList} parent={this}/>
                </div>
            </div>
        );
    }
}

export default App;
