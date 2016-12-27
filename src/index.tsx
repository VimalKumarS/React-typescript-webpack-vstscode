import * as React from "react";
import * as ReactDOM from "react-dom";
import {Route,Router,IndexRoute,browserHistory,History} from 'react-router';
import {Main} from './main';
import { Hello } from "./Hello";
import {Counter} from './increment'
import {FilterList} from './unidirectional'
import {Component} from "React";
import {ListContainer} from "./fluxex/component/ListContainer"
/*
ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);*/
/*
ReactDOM.render(
    <Counter count={1} />,
    document.getElementById("example")
);*/
/*
ReactDOM.render(
    <FilterList />,
    document.getElementById("example")
);*/
ReactDOM.render(
    <ListContainer />,
    document.getElementById("example")
);
/*
export class NotFound extends React.Component<any,undefined> {
     render(){
        return(
            <h1>404.. This page is not found!</h1>
        );
     }
}


ReactDOM.render(
    <Router history={browserHistory} >
        <Route component={Main} path="/app/">
        <IndexRoute component={Hello} />
        <Route path="/" component={Hello}/>
         <Route path="/Counter" component={Counter}/>
          <Route path="/FilterList" component={FilterList}/>
           <Route path='*' component={NotFound} />
          </Route>
    </Router>,
    document.getElementById('example')
);*/

//Todo
//- Dynamically add componenet
//- Dynamically update data stream
// - nested component
// - component communication
// - react forms
// - flux
// redux
// -routing
//react js data stream update component
/*
componentWillMount – Invoked once, on both client & server before rendering occurs.
componentDidMount – Invoked once, only on the client, after rendering occurs.
shouldComponentUpdate – Return value determines whether component should update.
componentWillUnmount – Invoked prior to unmounting component.

getInitialState – Return value is the initial value for state.
getDefaultProps – Sets fallback props values if props aren’t supplied.
mixins – An array of objects, used to extend the current component’s functionality.

*/  

//typings info dt~react-router --versions
//npm install @types/react-router


//https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669#.f12qfhm5y  
