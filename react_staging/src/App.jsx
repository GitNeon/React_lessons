//创建“外壳”组件App
import React,{Component} from 'react'
import Hello from "./02_src_hello_world/components/Hello";
import Welcome from "./02_src_hello_world/components/Welcome";

//创建并暴露App组件
export default class App extends Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}
