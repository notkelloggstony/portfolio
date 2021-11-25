import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Thumbnail(props) {

    return (
        <div className="project-thumbnail col-lg-4 col-md-6">
            <Link to={props.link}>
                <img src={process.env.PUBLIC_URL + '/images/' + props.image} alt="project thumbnail"/>
            </Link>
            <p className="project-title">{props.title}</p>
        </div>
    );
}

export default Thumbnail;
