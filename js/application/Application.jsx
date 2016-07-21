'use strict';

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Panel from './components/Panel.jsx';
import Login from './components/Login.jsx';


class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = {todoList: [], filter: 'all'};
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(lightTheme)};
    }

    render() {
        return (
            <div>
                <Header/>
                <Panel className="valign-wrapper">
                    <Login  />
                </Panel>
              <Footer/>
            </div>
        );
    }
}

Application.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default Application;
