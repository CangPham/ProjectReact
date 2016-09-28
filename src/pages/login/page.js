import React from 'react';
import {browserHistory} from 'react-router';
import styles from './style.css';
import { Panel, Input, Button } from 'react-bootstrap';


export default class LoginPage extends React.Component {
    signUp() {
        browserHistory.push('/home');
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            user: {UserPhoneNumber:'', Password:''}
        };
        this.onSubmit = this.onSubmit.bind(this)
        this.onUserPhoneChange = this.onUserPhoneChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)

    }

    handleLogin(event) {
        this.setState({liked: !this.state.liked});
    }
    onUserPhoneChange (event) {
        const user = this.state.user;
        user.UserPhoneNumber = event.target.value;
        this.setState({user: user});
    }

    onPasswordChange (event) {
        const user = this.state.user;
        user.Password = event.target.value;
        this.setState({user: user});
    }

    onSubmit (event) {
        event.preventDefault()
        //this.props.dispatch(loginRequest({this.state.user.UserPhoneNumber, this.state.user.Password}))
        this.props.actions.loginRequest(this.state.user)
    }

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">

                <div className="text-center">
                    <h1 className="login-brand-text">SB Admin React</h1>
                    <h3 className="text-muted">Created by <a href="http://startreact.com">StartReact.com</a> team</h3>
                </div>

                <Panel header={<h3>Please Sign In</h3>} className="login-panel">

                    <form role="form" onSubmit={this.handleLogin}>
                        <fieldset>
                            <div className="form-group">
                                <Input onChange={this.onUserPhoneChange} className="form-control" placeholder="User Phone Number"
                                       value={this.state.user.UserPhoneNumber} type="text" autofocus="" name="name"/>
                            </div>

                            <div className="form-group">
                                <Input onChange={this.onPasswordChange} className="form-control" placeholder="Password"
                                       value={this.state.user.Password} type="password" name="password"/>
                            </div>
                            <Input type="checkbox" label="Remember Me"/>
                            <Button type="submit" onClick={this.onSubmit} bsSize="large" bsStyle="success" block>Login</Button>

                        </fieldset>
                    </form>

                </Panel>

            </div>
        );
    }
}
LoginPage.propTypes = {
    user: React.PropTypes.object,
    //actions: React.PropTypes.object.isRequired
};