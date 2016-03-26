import React, {Component} from 'react';

export default class ActiveUser extends Component {
    constructor(props) {
        super(props);
        this.user = {
            "id": 0,
            "name": "Genevieve Allen",
            "age": 23,
            "phone": "(222) 427-1612",
            "image": "lion",
            "phrase": "Ribralpic fo ubuaha arfud kof ge memvucrec fidaz vezmobman duvfeati vejnid pisnamcok wiwojorug muwozfe ehegivi."
        }
    }

    render() {
        return (
            <div className="thumbnail">
                <img src={`images/${this.user.image}.svg`}/>
                <div className="thumbnail-caption">
                    <h3>{this.user.name}</h3>
                    <table className="user-info table table-responsive">
                        <tbody>
                        <tr>
                            <td>Age:</td>
                            <td>{this.user.age}</td>
                        </tr>
                        <tr>
                            <td>Favorite animal:</td>
                            <td>{this.user.image}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>
                                <span>8 </span> <span>{this.user.phone}</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <p>
                        <b>Favorite phrase: </b>
                        <span>{this.user.phrase}</span>
                    </p>
                </div>
            </div>
        );
    }
}
