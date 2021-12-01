import '../App.css';
import React from 'react';
import Thumbnail from './Thumbnail';
import Icon from '@mdi/react';
import { mdiLinkedin } from '@mdi/js';
import { mdiEmailFastOutline } from '@mdi/js';

class Home extends React.Component {
    render() {
        return (
            <div className="dark-page">

                <section id="title">
                    <h1 className="title-text">Hey! I'm Tony.</h1>
                    <div className="title-description">
                        <p>I'm a UI/UX designer, developer, and nerd of many things.</p>
                    </div>
                    <div className="title-buttons">
                        <a class="btn btn-primary shadow-none" href="https://www.linkedin.com/in/notkelloggstony" role="button">
                            <Icon path={mdiLinkedin} size="1.2rem"/> LinkedIn
                        </a>
                        <a class="btn btn-outline-light shadow-none" href="mailto:notkelloggstony@gmail.com" role="button">
                            <Icon path={mdiEmailFastOutline} size="1.2rem"/> Email
                        </a>
                    </div>
                </section>

                <hr />

                {/* <section>
                    <p>Check out my presentation from the Ignite UX Michigan 2021 virtual conference</p>
                    <a className="app-link" href="https://youtu.be/QH7oj_FTiCA">Watch →</a>
                </section>

                <hr /> */}

                <section id="projects">
                    <h2>My work</h2>
                    <div className="row">
                        {/* <Thumbnail link="/projects/digital-advertising-client-portal" image="p3.gif" title="Digital Advertising Client Portal"/> */}
                        {/* <Thumbnail link="/projects/hmi-user-management" image="" title="HMI User Management"/> */}
                        <Thumbnail link="/projects/factory-status-boards" image="p1.gif" title="Factory Status Boards"/>
                        <Thumbnail className="disabled" link="/" image="p0_coming_soon.gif"/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
