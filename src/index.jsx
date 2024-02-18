import App from './app.jsx';
import Search from './components/Search/index.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
const root = ReactDOM.createRoot(document.getElementById('root'));




// jsx 允许在模板中插入数组 数组自动展开全部成员
//     指定元素类名的时候不能用class 得用className  style 不能写""(字符串的形式)  得写{{}}(用双跨号)
const data=['a','b','c'];



//---------------------------------------------------------------
//根据动态数据 生成li 
const VDOM =(
  <div>
     <ul>
        {
          data.map((item,index)=>{
            return <li key={index}>{item}</li>
          })
        }
      </ul>
  </div>
)
//------------------------------------------------------------------


//-------------------------------------------------------------------------------------
//函数式组件 
function Welcome(props){
  return <div>hello,{props.name}</div>
}
//将{name:'react'} 作为props传入  Welcome组件将 <div>hello,react</div> 元素作为返回值 
//--------------------------------------------------------------------------------------

//-----------------------------------------------------------------------
//类式组件 
class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={isHot:true}
  }
  
  // state ={isHot:false}
  render(){
    const {isHot} = this.state
    return <div> <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.sex}</li>
                    <li>{this.props.age}</li>
                  </ul>
                  <h1 onClick={this.changeWeather}>今天天气很{isHot?'炎热':'凉爽'}</h1>
                  {/* 字符串形式 */}
                  <input ref="input" type="text" placeholder='点击按钮提示数据' />
                  <button onClick={this.showData}>我是一个按钮</button>
                  {/* 回调的形式  c会接收到当前节点作为参数，ref的值为函数的返回值，也就是this.input2 = c，因此是给实例下的input1赋值  */}
                  <input ref={c=>this.input2=c} type="text" onBlur={this.showData2} placeholder='失去焦点提示数据' />
                  {/* createRef形式 */}
                  <input ref={this.MyRef} type="text" placeholder='点击弹出' />
                  <button  onClick={this.btnOnclick}>点击弹出</button>
                  {/* 事件处理  通过event.target 减少refs的使用 */}
                  <input onChange={this.saveName} type="text" name="uaername"/>
            </div>
  }
  MyRef = React.createRef();
  //对组件的属性进行限制类型 
  static propTypes={
    name:PropTypes.string.isRequired,//限定name是string类型 isRequired 必须传递
    sex:PropTypes.string, //限定sex是string类型
    age:PropTypes.number,//限定age是Number类型
    speak:PropTypes.func  //限定speak是function类型
  }
  //指定默认的标签属性
  static defaulProps={
    sex:"男",
    age:12
  }

  //展示输入框的数据
  showData=()=>{
    //接收到第一个节点  字符串的refs 的形式
    const {input} = this.refs
    alert(input.value)
  }
  
  //展示右侧输入框的数据 
  showData2=()=>{
    //ref 回调的形式 
    const {input2}= this
    //获取第二个输入框
    alert(input2.value)
  }

  btnOnclick=()=>{
    //ref 通过创建 ceareRef形式
    console.log(this.MyRef.current.value);
  }


  saveName=(event)=>{
    console.log(event.target.value)
  }

  changeWeather =()=>{
    console.log(this.state,this)
    const isHot =this.state.isHot
    this.setState({isHot:!isHot})
  }
}
//组件中的render 方法的this为组件实例对象 
//组件自定义方法中由于开启了严格模式 this指向undefind 通过 bind改变this指向 或者推荐箭头函数 箭头函数的this指向 
//state 数据不能直接修改或者更新 

//包含表单元素的组件分为非受控组件与受控组件 
// 受控组件 表单组件的输入组件随着输入的并将内容存储到状态中(随时更新)
// 非受控组件 表单组件的输入组件内容在有需求的时候才存储到状态中 (即用即取)
//-------------------------------------------------------------------------

//组件实例三大属性 
//1.state React把组件看成一个状态机 通过与用户的交互 实现不同的状态 然后渲染UI 让用户界面和数据保持一致
//  react中 只需要更新组件的state 然后根据新的 state重新渲染用户界面 (不需要操作DOM)
//  简单说就是组件的状态 该组件存储的数据  在构造器中初始化state 在类中添加属性state来初始化 
//  React中不建议 state不允许直接修改而是通过类的原型对象上的方法 setState()
//  setState() this.setState(partialState,[callback]);
//  psrtialState 需要更新的状态的部分对象  callback 更新完状态后的回调函数 
//  写法1 this.setState({weather:"凉爽"}) 
//  写法2 this.setState(state=>({count:state.count+1}));
//  setState是一种合并操作  不是替换操作  在执行完setState操作后React会自动调一次render()
//  render() 的执行次数是1+n 1为初始化的自动调用 n 为状态更新的次数 
//2.props 与state不同 state是组件自身的状态 而props 则是外部传入的数据 
//  在使用时可以通过 this.props 获取值 类式组件的 props 通过在标签上的传递 在组件中就可以获取所转递的值 
//  在构造器里的props 参数里可以获取到props 可分别设置peopsTypes 和 defaultProps 两个属性来分别操作 
//  props的规范和默认值 两者都是直接添加在类式组件的原型对象上的(需要添加state) 同时可以通过...运算符简化 
//3.refs 提供了一种方式 允许我们访问DOM节点或在render方法中创建的react元素 
//  三种操作refs的方法 1.字符串形式 2.回调形式 3.createRef形式
//  createRef形式(推荐写法) React给我们提供了一个相应的API 它会自动的将该DOM元素放入实例对象中 (一个节点创建一个容器)
//  注意 不要过度使用ref 如果发生时间的元素刚好是需要操作的元素，可以使用事件对象替换 

//事件处理 
// React使用的是自定义事件 不是原生的DOM事件 
// React的事件是通过事件委托方式处理的 (为了更加的高效)
// 可以通过事件的event.target获取发生的DOM元素对象 可以尽量减少refs的使用 

//组件的生命周期 

//请求库 axios

//组件库  ant.design (俺的 第染)
//路由库  react-router
// redux (瑞打死) 实现 集中式状态管理 
//  适用于多交互 对数据源的场景   1.某个组件的状态需要共享时 2.一个组件需要改变其他组件的状态时 3.一个组件需要改变全局的状态时 
// 首先组件会在Redux 中派发一个Action方法 通过调用store.dispatch方法 将action对象派发给store  当store接收到action对象时
// 会将先前的state于传过来的action一同发送给reduer, reduer在接收到数据后 进行数据更改 返回一个新的状态给store 最后由store更改state







const getdata={name:"小明",sex:"男",age:12}

root.render(
  <React.StrictMode>
     {/* <Welcome name='react'></Welcome>
     <div>{VDOM}</div>
     <MyComponent {...getdata} />
     <div style={{display:"flex",margin:"40px auto",justifyContent:"center"}}>——————TODOLIST-DOME——————</div>
      <Search/> */}
     <App />
  </React.StrictMode>
)