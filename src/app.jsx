import React,{Component} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Test from "./components/Dome1";
import Layout from "./components/Layout"
import './app.css'
export default class App extends Component{
    render(){
        const {todos} = this.state

        return (
            // <Test addTodo={todos}/>
            <Layout/>

            // <div className="todo-container">
            // <div className="todo-wrap">
            // <Header addTodo={this.addTodo}/>
            // {/* 把数据传递给对应的渲染组件 */}
            // <List todos={todos}/>
            // <Footer changDone={this.changDone} />
            // </div>
            // </div>
        )
    }
    state={
        todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:"睡觉1",done:true},
            {id:'003',name:"运动",done:false}
        ]
    }

    addTodo =(todoObj)=>{
        console.log('从header组件传过来的值',todoObj)
        const{todos} = this.state
        //追加一个数据
        const newTodo = [todoObj,...todos]
        this.setState({
            todos:newTodo
        })
    }

    changDone=(changDone)=>{
        console.log('footer',changDone)
        let {todos} = this.state
        //改变全部的属性
        let newtodos = todos.map(item=>{
            return {...item,done:changDone}
        })
        console.log('todos',newtodos)
        this.setState({
            todos:newtodos
        })
    }
}