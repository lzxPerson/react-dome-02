import React,{Component} from "react"
import axios from 'axios'
export default  class Search extends Component{


	state={
		itme:""
	}

    search = ()=>{
		//获取用户的输入(连续解构赋值+重命名)
		const {keyWordElement:{value:keyWord}} = this
		//发送请求前通知App更新状态
		//发送网络请求
		axios.get(`https://zj.ebur.cn/api/services/app/DataDictionaries/GetRandomTagLine`).then(
			response => {
				//请求成功
                console.log("res",response.data.result)
				this.setState({
					itme:response.data.result
				})
			},
			error => {
				//请求失败后通知App更新状态
                console.log("err",error)
			}
		)
	}

        render(){
			const {itme} = this.state
            return(
                <div>
                    <h3>搜索GitHub用户</h3>
                    <input ref={c=>this.keyWordElement = c}  type="text" placeholder="输入GitHub用户" /> <button onClick={this.search}>搜索</button>
					<h1>{itme}</h1>
			    </div>
            )
        }
}