import React,{Component} from "react"
import Item from "../Item"
import propTypes from 'prop-types'

export default class List extends Component{
    // constructor(props){
    //     super(props);
    // }

    static propTypes={
        todos:propTypes.array.isRequired,
        updateTodo:propTypes.func.isRequired,
        deledateTodo:propTypes.func.isRequired
    }

    render(){
    const {todos,updateTodo} = this.props
        return(
            <ul className="todo-main">
                {
                   todos.map(todo=>{
                   return <Item key={todo.id} {...todo}/>
                  })
                } 
              </ul>
        )
    }
}