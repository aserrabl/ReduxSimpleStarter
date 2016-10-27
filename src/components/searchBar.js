import React, {Component} from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(event);
    }

    render() {
        return <input onChange={this.onInputChange}/>;
    }
}


export default SearchBar;