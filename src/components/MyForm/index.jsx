import React,{Component} from "react";
import { PlusOutlined } from '@ant-design/icons';
import Req from '../../Tools/api.js'
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
export default class MyForm extends Component{

    state={
        data:{
            name:"",
            age:"",
            address:""
        }
    }



    normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };
      add=()=>{
        console.log('点击了提交按钮')
      }
      onFinish = (values) => {
        const initialData= this.props.Modification
        console.log('Received values of form: ', values,initialData);
        this.setState({
            data: {...values}
        })
        if(JSON.stringify(initialData) =="{}"){
            Req(`create`,'post',{...values}).then((res)=>{
                console.log('新增',res)
            this.props.addTodo(values)
            }).catch(err=>{
                console.log('失败',err)
            })
        }else{
            Req(`update/${initialData.id}`,'PUT',{...values}).then((res)=>{
                console.log('修改',res)
            this.props.addTodo(values)
          })
        }
   

      
  

      };
    render(){
        const initialData= this.props.Modification
        return (
        <div> 
        <Form
        initialValues={initialData} 
         onFinish={this.onFinish}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
        >
           <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={this.normFile}>
            <Upload action="https://wiiline.azurewebsites.net/api/file" listType="picture-card">
              <button
                style={{
                  border: 0,
                  background: 'none',
                }}
                type="button"
              >
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </button>
            </Upload>
          </Form.Item>
          
          <Form.Item 
          label="name" name="name" 
          rules={[
            {
              required: true,
            },
          ]}>
            <Input />
          </Form.Item>
          {/* <Form.Item label="age" name="age" >
            <Input />
          </Form.Item> */}
          
    
        
          {/* <Form.Item label="address" name='address'>
            <TextArea rows={4} />
          </Form.Item> */}
       
         
          <Form.Item label=" " colon={false}>
      <Button type="primary" htmlType="submit" onClick={this.add}>
        提交
      </Button>
    </Form.Item>
   
        </Form>
      

        </div>
      )
    }
}