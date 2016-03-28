import React, {Component} from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import ActiveUser from './components/ActiveUser';
import UserList from './components/UserList';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            users: [],
            filteredUsers: null
        };
        this.loadUsers();
    }

    loadUsers() {
        fetch('data.json')
            .then(response => {
                return response.json().then(data => {
                    this.state.users = data;
                    this.state.filteredUsers = data;
                    this.selectUser(data[0]);
                });
            })
    }

    sortByName() {

    }

    sortByAge() {

    }

    search(val) {
        const regex = new RegExp(val, 'i');
        this.state.searchValue = val;
        this.state.filteredUsers = this.state.users.filter(el => regex.test(el.name));

        this.selectUser(this.state.filteredUsers[0])
    }

    selectUser(user){
        this.state.activeUser = user;
        this.setState(this.state);
    }

    render() {
        return (
            <div className="app container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <SearchBar searchValue={this.state.searchValue} changeValue={this.search.bind(this)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <ToolBar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-3 col-lg-2">
                        <ActiveUser user={this.state.activeUser}/>
                    </div>
                    <div className="col-sm-8 col-md-9 col-lg-10">
                        <UserList list={this.state.filteredUsers} selectUser={this.selectUser.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}
