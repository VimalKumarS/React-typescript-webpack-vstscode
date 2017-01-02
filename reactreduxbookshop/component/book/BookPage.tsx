import * as React from 'react';
import { connect, } from 'react-redux';
import {bindActionCreators } from "redux";
//import BookForm from './BookForm';
import { Link } from 'react-router';

import * as bookActions from '../../actions/bookActions';
export interface book {title:string}
export interface booksprop { books:Array<book> }
interface DispatchProps {
  createBook(message: string)
}
type HomeProps = booksprop & DispatchProps;
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return {
    // You can now say this.props.books
    books: state.books,
   

  }
};
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    createBook: book => dispatch(bookActions.createBook(book))
  }
 // return bindActionCreators( book => (bookActions.createBook(book)), dispatch)
};



//@connect<booksprop,HomeProps,any>(mapStateToProps,mapDispatchToProps)
//@connect<booksprop,DispatchProps,any>(mapStateToProps,mapDispatchToProps)
  class Book extends React.Component<HomeProps,any>{
    constructor(props){
    super(props);
    //this.props={books:[{title:""}]};
  }

  public static defaultProps: HomeProps = {
        books:[],
        createBook:() => {}
        
    };

   submitBook(input){
    this.props.createBook(input.title);
    //alert('Submitted');
  }
  render(){
    // Title input tracker
    let titleInput;
    let form;
    // return JSX
    return(
      <div>
        <h3>Books</h3>
        <ul>
          {/* Traverse books array  */}
  {this.props.books.map((b, i) => 
    
      <li key={i}>{b.title}</li>
     )}
        </ul>
        <div>
          <h3>Books Form</h3>
          <form ref={form1 => form=form1} onSubmit={e  => {
            // Prevent request
            e.preventDefault();
            // Assemble inputs
            var input = {title: titleInput.value};
            // Call handler
            this.submitBook(input);
            // Reset form
           // e.target.reset();
            form.reset();
            
          }}>
            <input type="text" name="title" ref={node => titleInput = node}/>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps1(dispatch) {
  return bindActionCreators(bookActions.createBook, dispatch)
}
export default connect<booksprop,DispatchProps,any>(mapStateToProps,mapDispatchToProps)(Book)