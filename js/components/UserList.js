import React, {Component} from 'react';
import UserData from './UserData';

export default class UserList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="user-list table table-striped">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {this.props.list.map(item => {
                    return (
                        <UserData key={item.id} user={item}/>
                    )
                })}
                </tbody>
            </table>
        );
    }
}
