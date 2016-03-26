import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    changeValue(e) {
        this.props.changeValue(e.target.value);
    }

    render() {
        return (
            <div className="form-group">
                <input value={this.props.searchValue} onChange={this.changeValue.bind(this)}
                       type="text" className="form-control"
                       placeholder="Search people by name..."/>
            </div>
        );
    }
}
