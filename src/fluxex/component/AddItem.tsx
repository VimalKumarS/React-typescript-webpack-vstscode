import * as React from "react";

export class AddItem extends React.Component < any,
any > {
    public refs:{
     textInput: HTMLInputElement;
    }
    constructor(props) {
        super(props)
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }
    handleSubmit(e) {
        if (e.keyCode === 13) {
            let newItem = this
                .refs
                .textInput.value;
                
            this
                .refs
                .textInput
                //.getDOMNode()
                .value = '';
            this
                .props.add(newItem);
                //.add(newItem);
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref="textInput"
                    className="form-control"
                    placeholder="New Item"
                    onKeyDown={this.handleSubmit}/>
            </div>
        )
    }
}