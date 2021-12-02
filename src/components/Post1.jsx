import '../App.css';
import React from 'react';

class Post1 extends React.Component {
    render() {
        return (
            <div className="light-page">
                <section className="project-page-title">
                    <p className="post-category">Before & After</p>
                    <h1>Shift Scheduler Glow Up</h1>
                    <p className="title-description">Creating a modern, more user-friendly shift schedule UI for factory management systems.</p>
                    <p className="post-badges">
                        <span className="badge bg-dark">Adobe XD</span>
                        <span className="badge bg-dark">ProViewDS</span>
                        <span className="badge bg-dark">C#</span>
                        <span className="badge bg-dark">XAML</span>
                    </p>
                </section>

                <hr />
                
                <section className="project-page-section">
                    <h2>Before</h2>
                    <div className="row">
                        <img className="col-lg-4" src={process.env.PUBLIC_URL + '/images/shift-scheduler-before.png'} alt="old shift scheduler screenshot" />
                    </div>
                    <p>Here's an example of a shift schedule view found in a factory HMI application. Aside from the outdated aesthetics, the schedule view is difficult to read and it's not so obvious what elements are interactive. For example, what do I press to modify the schedule? The gray weekday names? The colored bars?</p>
                </section>

                <section className="project-page-section">
                    <h2>After</h2>
                    <p>While I was working for Dynics, I designed the shift scheduling features in Dynimetrics, a factory production data collection, dashboarding, and reporting product. I researched several examples similar to the "before" shown above in order to provide a more modern, user friendly interface to plant floor managers and scheduling personnel.</p>
                    <div className="row">
                        <img className="col-lg-8" src={process.env.PUBLIC_URL + '/images/shift-scheduler-after.png'} alt="Dynimetrics shift scheduler screenshot" />
                    </div>
                    <p>The calendar is easy to read and more familiar to users who are accustomed to products like Google Calendar and Outlook using an agenda-style card view. The cards have visual states when the user hovers and when the shift has been modified to differ from the default schedule, or cancelled. I included some helpful bits like showing the time duration for each shift and a single-click option for restoring a shift to the schedule.</p>
                    <p>After wireframing and experimenting through interactive prototypes, we began building this new page. While my teammate wired up the database side, I performed the majority of front-end work creating the page layout, custom styling for the calendar view and user interactions, populating the calendar with data, and navigation.</p>
                </section>

            </div>
        );
    }
}

export default Post1;
