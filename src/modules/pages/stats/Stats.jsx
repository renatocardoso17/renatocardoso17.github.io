import React from 'react';
import {Link} from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../../main/Main';

import Personal from './components/Personal';
import Site from './components/Site';

const Stats = () => (
    <Main>
        <Helmet title="Stats"/>
        <article className="post" id="stats">
            <header>
                <div className="title">
                    <h2><Link to="/stats">Stats</Link></h2>
                </div>
            </header>
            <Personal/>
            <Site/>
        </article>
    </Main>
);

export default Stats;
