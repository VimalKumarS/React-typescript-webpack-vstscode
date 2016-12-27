import * as React from "react";

export class FilterList extends React.Component < any,
any > {

    constructor(props : any) {
        super(props);
        this.state = {
            initialItems: [
                "Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns"
            ],
            items: []
        }
        this.filterList = this
            .filterList
            .bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount');
        this.setState({items: this.state.initialItems})
    }
    filterList(event) {

        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item
                .toLowerCase()
                .search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});

    }
    render() {

        return (
            <div className="filter-list">
                <input type="text" placeholder="Search" onChange={this.filterList}/>
                <List items={this.state.items}/>
            </div>
        );
    }
}

class List extends React.Component < any,
any > {
    constructor(props : any) {
        super(props);
    }
    render() {
        return (
            <ul>
                {this
                    .props
                    .items
                    .map(function (item) {
                        return <li key={item}>{item}</li>
                    })
}
            </ul>
        )
    }

}
