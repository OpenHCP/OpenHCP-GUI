'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import request from 'httpify';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {login: '',password: ''};
    }

    _usernameChange(e) {
        this.setState({user: e.target.value});
    }

    _passwordChange(e) {
        this.setState({password: e.target.value});
    }

    _loginToSystem(e) {
        request({
            method: "POST",
            url:'https://vertical.horisone.net/api/v0/login', 
            data: {"user": this.state.user, "password": this.state.password}
        }, 
            function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('upload failed:', err);
                }
                console.log(err);
                console.log(httpResponse);
                console.log('Upload successful!  Server responded with:', body);
            }   
        );
    }
    


    render() {

        let headerStyle={padding: '3em 0 0 0' }

        return (
            <div class="valign-wrapper">
                <h3 style={headerStyle}>Login to OpenHCP</h3>
                <TextField hintText="Username"
                    value={ this.state.user }
                    onChange={ this._usernameChange.bind(this) }
                    class="valign center-block" />
                <br/>
                <TextField 
                    type="password"
                    hintText="Password"
                    value={ this.state.password }
                    onChange={ this._passwordChange.bind(this) }
                    class="valign center-block" />
                <br/>
                <br/>
                <FlatButton
                    class="valign center-block"
                    onClick={ this._loginToSystem.bind(this) }
                    label="Login" />
            </div>
            );
    }
}

Login.propTypes = {onTodoAdded: React.PropTypes.func};

export default Login;
