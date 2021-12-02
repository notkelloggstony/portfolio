import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Thumbnail(props) {

    return (
        <div className="project-thumbnail col-lg-4 col-md-6">
            <Link to={props.link} target={props.target}>
                <img src={process.env.PUBLIC_URL + '/images/' + props.image} alt="project thumbnail"/>
            </Link>
            <p className="project-thumbnail-title">{props.title}</p>
            <p className="post-category">{props.category}</p>
        </div>
    );
}

export default Thumbnail;