import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

// if (NODE_ENV === 'production') {
//   ReactGA.initialize(GA_ID);
// }

class Main extends Component {
    constructor(props, context) {
        super(props, context);
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        // if (NODE_ENV === 'production') {
        //   ReactGA.set({
        //     page: window.location.pathname,
        //   });
        //   ReactGA.pageview(window.location.pathname);
        // }
    }

    render() {
        return (
            <div id="wrapper">
                <Helmet titleTemplate="%s | Renato Cardoso" defaultTitle="Renato Cardoso" />
                <Header />
                <div id="main">
                    {this.props.children}
                </div>
                {!this.props.fullPage && <Sidebar />}
            </div>);
    }
}

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
};

Main.defaultProps = {
    children: null,
    fullPage: false,
};

export default Main;
