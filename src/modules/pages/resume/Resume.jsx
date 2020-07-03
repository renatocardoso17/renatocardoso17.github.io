import React from 'react';
import {Link} from 'react-router-dom';
import Helmet from 'react-helmet';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

import Main from '../../main/Main';

import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

import education from './data/education';
import experience from './data/experience';
import {categories, skills} from './data/skills';

import file from './data/RenatoCardosoCV.pdf';

const sections = [
    'Education',
    'Experience',
    'Skills'
];

const Resume = () => (
    <Main>
        <Helmet title="Resume"/>
        <article className="post" id="resume">
            <header>
                <div className="title">
                    <h2>
                        <Link to="resume">Resume</Link>
                        <a href={file} download>
                            <FontAwesomeIcon icon={faDownload} className="download"/>
                        </a>
                    </h2>
                    <div className="link-container">
                        {sections.map(sec => (
                            <h4 key={sec}>
                                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                            </h4>))}
                    </div>

                </div>
            </header>
            <Education data={education}/>
            <Experience data={experience}/>
            <Skills skills={skills} categories={categories}/>

        </article>
    </Main>
);

export default Resume;
