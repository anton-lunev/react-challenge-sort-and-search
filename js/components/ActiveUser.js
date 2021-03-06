import React, {Component} from 'react';

export default class ActiveUser extends Component {
    render() {
        if (!this.props.user) {
            return (<h2>Nothing found :(</h2>);
        }

        return (
            <div className="thumbnail">
                <img src={`images/${this.props.user.image}.svg`}/>
                <div className="thumbnail-caption">
                    <h3>{this.props.user.name}</h3>
                    <table className="user-info table table-responsive">
                        <tbody>
                        <tr>
                            <td>Age:</td>
                            <td>{this.props.user.age}</td>
                        </tr>
                        <tr>
                            <td>Favorite animal:</td>
                            <td>{this.props.user.image}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>
                                <span>8 </span> <span>{this.props.user.phone}</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <p>
                        <b>Favorite phrase: </b>
                        <span>{this.props.user.phrase}</span>
                    </p>
                </div>
            </div>
        );
    }
}
