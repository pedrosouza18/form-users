import React, { Component } from 'react';
import Form from '../components/form/form';
import Table from '../components/table/table';
import PubSub from 'pubsub-js';

export default class UserBox extends Component {

    constructor() {
        super();    
        this.state = {users : [], currentColumn: ''};
        this.users = [];    
    }

    componentDidMount(){  
        PubSub.subscribe('user-list', function(topic, user){
            this.users.push(user);
            this.setState({ users: this.users });
        }.bind(this));
    }
    
    sort(column) {
        const data = [...this.state.users];

        let dataOrder = [];

        if(this.state.currentColumn === column) {
            dataOrder = data.reverse();
        } else {
            dataOrder = data.sort((v1, v2) => {
                return v1[column].localeCompare(v2[column]);
            })
        }

        this.setState({ users: dataOrder, currentColumn: column });
    }


    render() {
        return (
            <div>
                <div className="App-form">
                    <Form />
                </div>
                <div className="App-table">
                    <Table users={this.state.users} click={(event) => this.sort.bind(this, event)}/>
                </div>
            </div>
        );
    }
}
