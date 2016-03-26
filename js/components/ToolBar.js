import React, {Component} from 'react';

export default class ToolBar extends Component {
    constructor(props) {
        super(props);
    }

    changeValue(e) {
        this.props.changeValue(e.target.value);
    }

    render() {
        return (
            <div className="toolbar">
                <button className="btn btn-default">
                    <i className="icon fa fa-sort-alpha-asc"/>
                    <span>  Sort by name</span>
                </button>
                <button className="btn btn-default">
                    <i className="icon fa fa-sort-numeric-desc"/>
                    <span>  Sort by age</span>
                </button>
            </div>
        );
    }
}
