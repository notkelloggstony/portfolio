import '../App.css';
import React from 'react';
import Thumbnail from './Thumbnail';

class Home extends React.Component {
    render() {
        return (
            <div className="page col-md-10">

                <section id="title">
                    <h1 className="title-text">Hi! I'm Tony.</h1>
                    <p>I'm a UI, UX, and software product designer in Ann Arbor, Michigan.</p>
                </section>

                <section id="projects">
                    <div className="row">
                        <Thumbnail link="" image="P03.gif" title="Digital Advertising Client Portal"/>
                        <Thumbnail link="" image="P01.gif" title="Factory Status Boards"/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
