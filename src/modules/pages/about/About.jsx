import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from '../../main/Main';

import markdown from './data/about.md';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            md: '',
            count: 0
        };
        fetch(markdown)
            .then((res) => res.text())
            .then((md) => {
                const count = md.split(/\s+/)
                    .map(s => s.replace(/\W/g, ''))
                    .filter(s => s.length).length;
                this.setState({md, count});
            });
    }

    render() {
        return (
            <Main>
                <Helmet title="About"/>
                <article className="post" id="about">
                    <header>
                        <div className="title">
                            <h2><Link to="/about">About Me</Link></h2>
                            <p>(in about {this.state.count} words)</p>
                        </div>
                    </header>
                    <ReactMarkdown
                        source={this.state.md}
                        escapeHtml={false}
                    />
                </article>
            </Main>
        );
    }
}

export default About;
