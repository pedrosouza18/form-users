import React, { Component } from 'react';
import Input from '../input/input';
import './form.css';
import PubSub from 'pubsub-js';

export default class Form extends Component {

        constructor() {
            super();
            this.state = {};
        }

        onChangeInput(event) {
            this.setState({ [event.target.name]: event.target.value });
        }

        onSubmit(event) {
            event.preventDefault();
            PubSub.publish('user-list', this.state);
        }


        render() {
            return (
                <form className="form-user" action="#" onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-user__box">
                        <header className="form-user__header">
                            <h3 className="form-user__title">User</h3>
                        </header>
                        <div className="form-user__fields">
                            <Input namePeople="Name" type="text" changed={this.onChangeInput.bind(this)} name="name"/>
                            <Input namePeople="Username" type="text" changed={this.onChangeInput.bind(this)} name="username"/>
                            <Input namePeople="E-mail" type="email" changed={this.onChangeInput.bind(this)} name="email"/>
                        </div>
                    </div>
                    <div className="form-user__boxbtn">
                        <input type="submit" value="Send" className="form-user__btn"/>
                    </div>
                </form>
            );
        }
}
