import {appConstants} from "../constant/appConstants"
import {dispatcher} from "../dispatcher/AppDispatcher"

export class TodoActions {
    public addItem(item) : void {
        dispatcher.dispatch({actionType: appConstants.ADD_ITEM, data: item})
    }
    public removeItem(index) : void {
        dispatcher.dispatch({actionType: appConstants.REMOVE_ITEM, data: index})
    }
}

/*
var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var todoActions = {
  addItem: function(item){
    AppDispatcher.handleAction({
      actionType: appConstants.ADD_ITEM,
      data: item
    });
  },
  removeItem: function(index){
    AppDispatcher.handleAction({
      actionType: appConstants.REMOVE_ITEM,
      data: index
    })
  }
};

module.exports = todoActions;
*/