import '../App.css';
import React from 'react';

class Post2 extends React.Component {
    render() {
        return (
            <div className="light-page">
                <section className="project-page-title">
                    <p className="post-category">Case study</p>
                    <h1>Factory status boards</h1>
                    <p className="title-description">How an admin page redesign helped to fix inaccuracies with live production data and improved ongoing usability.</p>
                    <p className="post-badges">
                        <span className="badge bg-dark">Adobe XD</span>
                        <span className="badge bg-dark">ProViewDS</span>
                        <span className="badge bg-dark">Material Design</span>
                        <span className="badge bg-dark">C#</span>
                    </p>
                </section>

                <hr />
                
                <section className="project-page-section">
                    <h2>Background</h2>
                    <p>My team had worked for several years with our client, an automotive engine manufacturer in Detroit who standardized several of their manufacturing lines on ProViewDS, a software development platform offered by my company and tailored for industrial control systems.</p>
                    <p>Over time we co-developed a solution including real-time event logging, visualization of station statuses and production metrics on overhead screens, audio alarms, analytics dashboards, and more.</p>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="project-page-card">
                                <h3>Project type</h3>
                                <ul>
                                    <li>Industrial manufacturing</li>
                                    <li>Real-time alarms/events</li>
                                    <li>Data collection</li>
                                    <li>Visualization</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-page-card">
                                <h3>My role</h3>
                                <ul>
                                    <li>UX design</li>
                                    <li>Front-end development</li>
                                    <li>Project management</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-page-card">
                                <h3>Team credits</h3>
                                <ul>
                                    <li>Rohit Aggarwal - Developer</li>
                                    <li>Scott Milligan - BA</li>
                                    <li>Sherri Wolf - PM</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <hr />

                <section className="project-page-section">
                    <h2>Problem statement</h2>
                    <p>Our client reported issues where metrics appeared incorrectly on overhead displays, and some values entered on admin pages were not saving after a server restart. At the time, my team was also scoping a new project for the client to roll out similar applications to other manufacturing lines.</p>
                    <h2>Goals</h2>
                    <ol className="project-page-list">
                        <li>Identify the root cause of inaccurate metrics and apply fixes.</li>
                        <li>Implement usability improvements to admin pages and fix fields that fail to save.</li>
                        <li>Define a standard design for consistency between the new and old applications.</li>
                    </ol>
                    <h2>Challenges</h2>
                    <ul className="project-page-list">
                        <li>Our client originally developed the application in-house. An analysis for possible “technical debt” and some reverse engineering would be required.</li>
                        <li>The system included multiple applications running on separate servers for each manufacturing line with significant differences in their implementations. There was plenty of copy + paste but no shared code base or front-end.</li>
                        <li>Deployment required a short maintenance window and was live with no staging environment or automation. Just back up the files and replace them (always nerve-racking).</li>                    </ul>
                </section>

                <hr />

                <section className="project-page-section">
                    <h2>Research</h2>
                    <p>While my developer investigated the metrics calculations, I worked with my business analyst and our client contact to review the admin pages. After interviewing plant floor managers and team leads, we had a better understanding of the use of the admin features and learned that issues usually happened when servers restarted or when schedule adjustments were made.</p>
                    
                    <h3>Shift schedule</h3>
                    <p>Team Leads and managers were responsible for updating the shift schedule daily.</p>
                    <p>Reviewing a history of past issues with the client, we found metrics were most often incorrect when someone forgot to update the shift times (on a holiday, half-day, or late start, for example).</p>
                    <p>We also learned the schedule was stored in a separate system we could easily query rather than requiring users to perform frequent data entry.</p>
                    <div className="row">
                        <img className="col-md-3 col-sm-6" src={process.env.PUBLIC_URL + '/images/factory-status-boards-old-shift-times.png'} alt="old shift schedule admin screenshot" />
                    </div>

                    <h3>Non-retentive tags</h3>
                    <p>Many values in ProViewDS are stored in tags (you can think of them as data fields or variables).</p>
                    <p>Some tags used on admin pages were not configured to be retentive (a built-in feature to save data when the app shuts down).</p>
                    <p>This was missed by the original developer, but was an easy fix.</p>
                    <div className="row">
                        <img className="col-md-3 col-sm-6" src={process.env.PUBLIC_URL + '/images/factory-status-boards-old-targets.png'} alt="old target values admin screenshot" />
                    </div>

                    <h3>Navigation</h3>
                    <p>Some users were frustrated with navigating between pages.</p>
                    <p>The pages were built in piecemeal starting with one page, adding a second for more real-estate, and so on after the first page became cluttered.</p>
                    <p>Simple left and right arrow buttons were used to navigate like a slideshow and required users to click through multiple pages to reach pages 3, 4, or 5.</p>
                    <div className="row">
                        <img className="col-md-7 col-sm-10" src={process.env.PUBLIC_URL + '/images/factory-status-boards-old-nav.png'} alt="old admin navigation screenshot" />
                    </div>
                </section>

                <hr />

                <section className="project-page-section">
                    <h2>Usability testing</h2>
                    <p>I performed independent usability testing and further dissected the original admin UI.</p>
                    <div className="row">
                        <img className="col-md-6" src={process.env.PUBLIC_URL + '/images/factory-status-boards-old-admin-page.png'} alt="old admin page screenshot" />
                    </div>

                    <h3>Fields saved immediately</h3>
                    <p>The admin pages instantly saved values when users hit Enter, clicked, or tabbed away from any field. This caused some usability issues:</p>
                    <ol className="project-page-list">
                        <li>If more than 1 field contributed to the same metric calculation, the result would be incorrect until the user updated each field. This caused skewed numbers to appear on overhead screens for minutes at a time. Avoidable if all values are updated simultaneously with 1 click.</li>
                        <li>If a user entered invalid values in some formatted fields, it would reset to 0 rather than returning to the original value. Besides frustrating users, this would cause incorrect production metrics to appear until a valid number was entered.</li>
                    </ol>

                    <h3>Enabled/disabled fields</h3>
                    <p>Some fields were disabled but gave the user no visual indication. Other fields appeared as plain text but were actually editable. Though these fields were not wired up to save entered data, they were confusing to users who’d happen to interact with them.</p>

                    <h3>Screen resolution</h3>
                    <p>The layout was hardcoded to render in 1366 x 768 resolution, but it was used on standard 1920 x 1080 screens.</p>

                    <h3>Look and feel</h3>
                    <p>The visual design was severely outdated, along with sizing and layout issues rampant across several pages. I suggested that we update the design to our latest standards and organize the content.</p>
                </section>

                <hr />

                <section className="project-page-section">
                    <h2>Design</h2>
                    <p>I had previously built a design system and UI kit for my team's ProViewDS projects, so standard UI controls and a new layout were easy to import. After creating a look and feel mock-up for our client’s review, I built a skeleton of template pages and side navigation for developers to re-use.</p>
                    <div className="row">
                        <img className="col-lg-8" src={process.env.PUBLIC_URL + '/images/factory-status-boards-wireframe.png'} alt="new admin layout screenshot" />
                    </div>
                    <p>The platform uses a non-responsive front-end, so sizing and spacing had to be pixel perfect. By setting the new standard and building more easily reusable components, we planned to update the new project and then copy to the other existing application.</p>
                </section>

                <hr />

                <section className="project-page-section">
                    <h2>Solution</h2>

                    <div className="row">
                        <img className="col-lg-8" src={process.env.PUBLIC_URL + '/images/factory-status-boards-new-admin-page.png'} alt="new admin page screenshot" />
                    </div>

                    <h3>1. Metrics fixes</h3>
                    <p>My developer had identified other possible causes of inaccurate metrics. The application was not designed to recalculate metrics on the fly. Instead, it relied on a shaky system of incremental counters and assumed the application would only ever restart between shifts (which was not always the case).</p>
                    <p>We hit the whiteboard, laid out a new workflow accounting for edge cases, and proposed the changes to our client. They also corrected retentive tags to save data properly, even when the application was restarted. This fixed the more immediate issues experienced by users.</p>

                    <h3>2. Admin pages improvements</h3>
                    <p>Using my templates and UI kit, we implemented admin pages including proper screen resolution, more user-friendly and organized navigation, improved layout and styling of content.</p>
                    <p>Save and Cancel buttons were implemented where appropriate, allowing users to change multiple values before saving and avoiding incorrect values on overhead displays.</p>
                    <p>The shift schedule page was updated to pull and save to a centralized database so separate applications running on multiple lines could share the data and allow users to update the schedule from any of the applications.</p>

                    <h3>3. Standardization</h3>
                    <p>We received very positive feedback as the improvements rolled out over time. We began implementing the new design standards and “on the fly” method of recalculating metrics to each manufacturing line, and re-used these components as the client requested addition new projects.</p>
                </section>

            </div>
        );
    }
}

export default Post2;
