import {appConstants} from "../constant/appConstants"
import {dispatcher} from "../dispatcher/AppDispatcher"
import {EventEmitter} from "events"

let CHANGE_EVENT = 'change';
dispatcher.register( function(payload): void {
  let action = payload.actionType;
  switch(action){
    case appConstants.ADD_ITEM:
      addItem(payload.data);
      todoStore.emitChange(CHANGE_EVENT);
      break;
    case appConstants.REMOVE_ITEM:
      removeItem(payload.data);
      todoStore.emitChange(CHANGE_EVENT);
      break;
    default:
      
  }
});


let _store = {
  list: []
};

let addItem = function(item){
  _store.list.push(item);
};

let removeItem = function(index){
  _store.list.splice(index, 1);
}

/*
var todoStore = Object.Assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList: function(){
    return _store.list;
  },
});*/

class TodoStoreStatic extends EventEmitter {
  public  addChangeListener(cb){
        this.on(CHANGE_EVENT, cb)
    }

   public  removeChangeListener(cb){
    this.removeListener(CHANGE_EVENT, cb);
  }

  public emitChange(ce): void {
    this.emit(ce);
  }

  public getList(){
      return _store.list;
  }
}

var todoStore: TodoStoreStatic =  new TodoStoreStatic();

export {todoStore}