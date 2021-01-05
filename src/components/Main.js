import React from 'react';
import '../styles/App.css';
import PropTypes from 'prop-types';
import Post from '../components/Post.js'
import prf from '../images/profile-picture.jpg';


const Main = props => {
    var date = "2021-01-01";
    var user = {
        profile_picture: prf,
        name: "Norbert Błaszczyk"
    }
    var content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    return (
        <React.Fragment>
        <main>
            <div id="posts">
                <Post profile_picture={user.profile_picture} name={user.name} date={date} content={content} ></Post>
               
                 </div>
        </main>
        
        </React.Fragment>
    );
};

Main.propTypes = {
    
};

export default Main;