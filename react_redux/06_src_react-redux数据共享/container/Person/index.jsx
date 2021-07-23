import React, {Component} from 'react';
import {connect} from 'react-redux'
import personReducer from "../../redux/reducers/person_reducer";
import {createAddPersonAction} from "../../redux/action/person_action";

class Person extends Component {

  addPerson = () => {
    console.log('姓名：',this.nameNode.value,"年龄：",this.ageNode.value);
    let person = {
      id: Math.random() + Math.random()*1.152,
      name: this.nameNode.value,
      age: this.ageNode.value
    };
    this.props.add_Person(person);
  }

  render() {
    console.log('this.props:',this.props);
    return (
      <div>
        <h3>Person组件,共享Count组件的值为：{this.props.countNumber}</h3>
        <span>姓名：</span><input type="text" placeholder="请输入姓名" ref={c => this.nameNode = c}/>
        <span>年龄：</span><input type="text" placeholder="请输入年龄" ref={c => this.ageNode = c}/>
        <button onClick={this.addPerson}>添加人员</button>
        <p>遍历人员列表：</p>
        <ul>
          {
            this.props.personList.map(person => {
              return <li>ID：{person.id}---Name: {person.name}---Age: {person.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  (state)=>{
    return {
      personList: state.personList,
      countNumber: state.countNumber
    }
  },
  {
    add_Person: createAddPersonAction
  }
)(Person);
