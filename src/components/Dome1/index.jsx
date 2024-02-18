import React,{Component} from "react"
import PropTypes from "prop-types"
export default  class Dome1 extends Component{
	          //限制 Dome 类组件的属性
              static propTypes={
                name:PropTypes.string
            }
                //默认标签属性值
                static defaultProps={
                    sex:"男",
                    name:"张三"
                } 
   
    state =  {'arr':['A','B','C','D','F'],'ishot':false}
    changeishot=(()=>{
        this.setState({
            ishot:!this.state.ishot
        })
    })



    // 调用render()得到虚拟 DOM ,并解析为真实 DOM
        render(){
   
     let todos = this.props
    console.log(this.props)
            return(
                <div>
                    <button onClick={this.changeishot}>{this.props.name}改变ishot的值{this.state.ishot?'true':"false"}</button>
                    <ul>
                        {
                       this.state.arr.map((item,index)=>{
                           return <li key={index}>{this.state.ishot?'123':item}</li>
                        })
                        }
                    </ul>
			    </div>  
            )
        }
}