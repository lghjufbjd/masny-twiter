import React from 'react';
import '../styles/App.css';
import PropTypes from 'prop-types';
import prf from '../images/profile-picture.jpg';

const Post = ({profile_picture,name, date, content}) => {
    return (
        <React.Fragment>
        <div className="post">
            <p className="text">{content}</p>
            <div style={{padding: "10px"}} className="gap"></div>
            <div className="author-card">
                <img className="profile-picture" src={profile_picture}></img>
                <div className="name-and-data">
                    <p className="name">{name}</p>
                    <p className="date">{date}</p> 
                </div>
            </div>
        </div>
        </React.Fragment>
    );
};

Post.propTypes = {
    
};

export default Post;