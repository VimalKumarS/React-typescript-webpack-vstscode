import * as React from "react";
import {todoStore} from "../stores/todoStore";
import {TodoActions} from "../actions/todoActions";
import {AddItem} from "./AddItem"
import {List} from "./List"

export interface listState { list: any; }

export class ListContainer extends React.Component < {}, listState > {
    todoaction:TodoActions
    constructor(props) {
        super(props)
        //this.state.list= []; //todoStore.getList() || [];
          this.state= {list:todoStore.getList()};
        this.todoaction = new TodoActions();
        this.handleAddItem= this.handleAddItem.bind(this)
        this.handleRemoveItem= this.handleRemoveItem.bind(this);
        this._onChange=this._onChange.bind(this);
    }
    componentDidMount(){
    todoStore.addChangeListener(this._onChange);
  }
   componentWillUnmount(){
    todoStore.removeChangeListener(this._onChange);
  }

  _onChange(){
   
    this.setState({list:todoStore.getList()})
  }

   handleAddItem(newItem){
    this.todoaction.addItem(newItem);
  }
  handleRemoveItem(index){
    this.todoaction.removeItem(index);
  }
  render(){
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Todo List </h3>
          <AddItem add={this.handleAddItem}/>
          <List items={this.state.list} remove={this.handleRemoveItem}/>
        </div>
      </div>
    )
  }
}