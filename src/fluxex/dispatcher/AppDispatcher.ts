import {flux,Dispatcher} from "flux"

/*
export class AppDispatcher {

    public AppDispatcher;
    constructor() {
        this.AppDispatcher = new Dispatcher();

        this.AppDispatcher.handleAction = function (action) {
            this.dispatch({source: 'VIEW_ACTION', action: action});
        };
    }
    handleAction(action){
        this.AppDispatcher.dispatch({source: 'VIEW_ACTION', action: action});
    }

}*/

let  dispatcher: Dispatcher<any> = new Dispatcher();

export {dispatcher};