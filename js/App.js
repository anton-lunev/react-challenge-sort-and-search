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
            users: []
        };
        this.loadUsers();
    }

    loadUsers() {
        fetch('data.json')
            .then(response => {
                return response.json().then(data => {
                    this.state.users = data;
                    this.setState(this.state);
                });
            })
    }

    sortByName() {

    }

    sortByAge() {

    }

    search() {

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
                        <ActiveUser/>
                    </div>
                    <div className="col-sm-8 col-md-9 col-lg-10">
                        <UserList list={this.state.users}/>
                    </div>
                </div>
            </div>
        );
    }
}
