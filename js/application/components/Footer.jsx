'use strict';

import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let footerStyle = {
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginTop: '15px'
        };
        return (
            <footer style={ footerStyle }>
              <span>{ 'OpenHCP on ISC Licence' }</span>
            </footer>
            );
    }
}

export default Footer;
