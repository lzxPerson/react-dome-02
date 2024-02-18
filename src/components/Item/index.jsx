import React,{Component} from "react";
export default class Item extends Component{

  state={ 'mouse':false}


    render(){
      const {name,done} = this.props


        return(
            <li onMouseEnter={this.Move(true)} onMouseLeave={this.Move(false)}>
                  <label>
                    {/* defaultChecked 相对比 checked 可以更改 */}
                    <input type="checkbox"  defaultChecked={done}/>
                    <span>{name}</span>
                  </label>
                  <button className="btn btn-danger" style={{display:this.state.mouse?"block":"none"}}>删除</button>
                </li>
        )  
    }

    //鼠标移入
    Move=(e)=>{
      return ()=>{
      console.log("鼠标移入",e)
        this.setState({
          'mouse':e
        })
      }
    }

    //鼠标移出


}