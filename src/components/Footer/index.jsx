import React,{Component} from "react";

export default class Footer extends Component{
    render(){
        return(
            <div className="todo-footer">
            <label>
              <input type="checkbox" onChange={this.chengdone}/>
            </label>
            <span>
              <span>已完成0</span> / 全部2
            </span>
            <button className="btn btn-danger">清除已完成任务</button>
          </div>
        )
    }

    chengdone=(e)=>{
      this.props.changDone(e.target.checked)
    }


}