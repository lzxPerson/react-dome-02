import React,{Component} from 'react';
export default class Header extends Component{
    render(){
        return(
            <div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
          </div>
        )
    }

    handleKeyUp =(event)=>{
        //解构赋值 判断回车键 输入值
        const {keyCode,target} = event
        if(keyCode ===13){
            if(target.value.trim() ===''){
                alert("请输入内容!")
            }else{
                //创建一个对象 
                const todoObj = {id:"12", name:target.value,done:false}
                //传递给APP
                this.props.addTodo(todoObj)
                //清空输入框
                target.value = ""
            }
        }
    }
}