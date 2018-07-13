import React, { Component } from 'react';
import './table.css';

export default class Table extends Component {

    render() {
        return (
            <table className="table-user">
                <thead className="table-user__thead">
                    <tr className="table-user__tr">    
                        <th className="table-user__th" onClick={this.props.click('name')}>Name</th>
                        <th className="table-user__th" onClick={this.props.click('username')}>Username</th>
                        <th className="table-user__th" onClick={this.props.click('email')}>E-mail</th>
                    </tr>
                </thead>
                <tbody className="table-user__tbody">
                    {
                        this.props.users.map((user, index) => {
                            return (
                                <tr key={index} className="table-user__tr--td">
                                    <td className="table-user__item">{user.name}</td>
                                    <td className="table-user__item">{user.username}</td>
                                    <td className="table-user__item">{user.email}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}