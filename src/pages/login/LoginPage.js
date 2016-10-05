import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import styles from './style.css';
import { Panel, FormControl, Button, Checkbox } from 'react-bootstrap';
import * as loginActions from '../../actions/loginActions';

class LoginPage extends React.Component {
    signUp() {
        browserHistory.push('/home');
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            user: {UserPhoneNumber:'0932988688', Password:'123456'}
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
        this.props.actions.loginUser(this.state.user)
    }

    render() {
        const { errorMessage } = this.props

        return (
            <div className="col-md-4 col-md-offset-4">

                <div className="text-center">
                    <h1 className="login-brand-text">Admin Panel</h1>
                </div>

                <Panel header={<h3>Please Sign In</h3>} className="login-panel">

                    <form role="form" onSubmit={this.handleLogin}>
                        <fieldset>
                            <div className="form-group">
                                <FormControl onChange={this.onUserPhoneChange} className="form-control" placeholder="User Phone Number"
                                       value={this.state.user.UserPhoneNumber} type="text" name="name"/>
                            </div>

                            <div className="form-group">
                                <FormControl onChange={this.onPasswordChange} className="form-control" placeholder="Password"
                                       value={this.state.user.Password} type="password" name="password"/>
                            </div>

                            <Checkbox>Remember Me</Checkbox>
                            <Button type="submit" onClick={this.onSubmit} bsSize="large" bsStyle="success" block>Login</Button>

                        </fieldset>
                    </form>

                </Panel>

            </div>
        );
    }
}
LoginPage.propTypes = {
    user: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired,
    errorMessage: React.PropTypes.string
};

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)