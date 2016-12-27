import * as React from 'react';
import { Link } from 'react-router';
export class Main extends React.Component<any,undefined> {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">React typescript</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
    {/*<li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>*/}
                                 <li><Link to="/">Home</Link></li>
                                <li><Link to="/Counter">Counter</Link></li>
                                <li><Link to="/FilterList">FilterList</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                   
                    {this.props.children}
                </div>
            </div>
        );
    }
}

