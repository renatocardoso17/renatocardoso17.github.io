import React from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import me from '../../assets/me.jpg';

import data from '../../data/contacts';

const Sidebar = () => (
    <section id="sidebar">
        <section id="intro">
            <Link to="/" className="logo">
                {/*<img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />*/}
                <img src={me} alt=""/>
            </Link>
            <header>
                <h2>Renato Cardoso</h2>
                <p><a href="mailto:rc@renatocardoso.dev">rc@renatocardoso.dev</a></p>
            </header>
        </section>

        <section className="blurb">
            <h2>About</h2>
            <p>Hi, I&apos;m Renato. I like building things.
                Currently, I&apos;m a senior software developer creating awesome web apps for Paddy Power Betfair.
                Click below and learn more about me.
            </p>
            <ul className="actions">
                <li>
                    {/*{window.location.pathname !== `${BASE_PATH}/resume` ?*/}
                    {window.location.pathname !== `/resume` ?
                        <Link to="/resume" className="button">Learn More</Link> :
                        <Link to="/about" className="button">About Me</Link>}
                </li>
            </ul>
        </section>

        <section id="footer">
            <ul className="icons">
                {data.map(s => (
                    <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon}/></a></li>
                ))}
            </ul>
            <p className="copyright">&copy; Renato Cardoso <Link to="/">renatocardoso.dev</Link>.</p>
        </section>
    </section>
);

export default Sidebar;
