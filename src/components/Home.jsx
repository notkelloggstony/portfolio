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
                        <p>I'm a user experience designer, software developer, and nerd of many things.</p>
                    </div>
                    <div className="title-buttons">
                        <a className="btn btn-primary title-button-space shadow-none" href="https://www.linkedin.com/in/notkelloggstony" target="_blank" rel="noreferrer" role="button">
                            <Icon path={mdiLinkedin} size="1.2rem"/> LinkedIn
                        </a>
                        <a className="btn btn-outline-light shadow-none" href="mailto:notkelloggstony@gmail.com" role="button">
                            <Icon path={mdiEmailFastOutline} size="1.2rem"/> Email me
                        </a>
                    </div>
                </section>

                <section id="posts">
                    <div className="row">
                        <Thumbnail className="disabled" link="/ignite-ux-2021" target="_blank" image="ignite-ux-2021.png" title="Ignite UX 2021 Presentation" category="Video" />
                        <Thumbnail link="/p/shift-scheduler" image="shift-scheduler.gif" title="Shift Scheduler Glow Up" category="Before & After"/>
                        <Thumbnail link="/p/factory-status-boards" image="factory-status-boards.gif" title="Factory Status Boards" category="Case Study"/>
                        <Thumbnail className="disabled" link="/" image="coming-soon.png"/>
                        {/* <Thumbnail link="/p/digital-advertising-client-portal" image="p3.gif" title="Digital Advertising Client Portal"/> */}
                        {/* <Thumbnail link="/p/hmi-user-management" image="" title="HMI User Management"/> */}
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
