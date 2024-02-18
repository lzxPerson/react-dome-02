import React,{Component} from "react";
import { Layout, Flex ,Menu,Breadcrumb,Space, Table, Tag, Radio,Button} from 'antd';
import MyForm from "../MyForm";
import './index.css'
import Req from '../../Tools/api.js'
export default class MyTable extends Component{
  
    state={
      Modification:{},
      flge:true,
         columns: [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
          },
          {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Space size="middle">
                <a onClick={this.Delete('修改',record)}>修改 {record.name}</a>
                <a onClick={this.Delete('删除',record)}>Delete</a>
              </Space>
            ),
          },
        ],
        data:[
          {
            key: '1',
            name: 'John Brown',
    
          },
          {
            key: '2',
            name: 'Jim Green',
        
          },
          {
            key: '3',
            name: 'Joe Black',
            
          },
        ],
      }
      Delete=(Operation,e)=>{
        return ()=>{
          if(Operation =='删除'){
        console.log("我点击了删除",e)
        Req(`delete/${e.id}`,'DELETE',{}).then((res)=>{
          console.log('删除',res)
     this.Updating()
      })
          }else{
        console.log("我点击了修改",e)
        this.setState({
          flge:false,
          Modification:{...e}
        })
          }
        }
      }
      componentDidMount(){
        console.log("MyTable挂载完碧")

        // Req(`getfiles`,'get',{}).then((res)=>{
        //   console.log("图片",res)
        // })

        Req(`list`,'get',{}).then((res)=>{
              console.log('res',res)
              let newres = res.map(item=>{
                return{
                  key:item.id,...item
                }
              })
              this.setState({
                data:newres
              })
        })
        
        this.setState({
          data:[]
        })
      }
      changFlge=()=>{
        let {flge} = this.state
        this.setState({
          flge:!flge,
          Modification:{}
        })
      }
      addTodo=(e)=>{
     this.Updating()
     
        this.changFlge()
      }
      Updating =()=>{
        Req(`list`,'get',{}).then((res)=>{
          console.log('res',res)
          let newres = res.map(item=>{
            return{
              key:item.id,...item
            }
          })
          this.setState({
            data:newres
          })
    })
      }
      render(){
        return (
              <div>
               
          <div className="add"><Radio.Button value="large" onClick={this.changFlge}>{this.state.flge?'添加':'关闭'}</Radio.Button></div>
           {this.state.flge?<Table columns={this.state.columns} dataSource={this.state.data} /> :<MyForm addTodo={this.addTodo} Modification={this.state.Modification} /> }
            </div>
        )
    }
}