import * as React from "react";

export interface counterprop { count: number; }
export interface counterstate { count: number; }
 class Counter  extends React.Component<counterprop,counterstate> {

     constructor(props:counterprop) {
            super(props);
            this.state= {count:this.props.count};
       this.incrementCount= this.incrementCount.bind(this);
     }
 incrementCount(event){
    //this.setState({
    //     count: this.state.count + 1
   // });
   this.setState({count:this.state.count+1})
   //this.props.count=this.props.count+1;
   //this.state= Object.assign({},{count: this.state.count +1}) ;
   
  }

 public shouldComponentUpdate(nextProps: any, nextState) {
                console.log(nextProps);
                console.log(nextState);
                return true;
 }

    render() {
        return  (
        <div className="my-component">
        <h1>Count: {this.state.count}</h1>
        <h1>Count: {this.props.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
        </div>
        )

    }

    static defaultProps: counterprop = {
        count:3
    };

    static propTypes  ={
        count:React.PropTypes.number
    }
}

export {Counter}