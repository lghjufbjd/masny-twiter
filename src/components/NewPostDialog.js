import React, { useState } from 'react';
import '../styles/App.css';
import PropTypes from 'prop-types';
import ContentEditable from "react-contenteditable";
import Post from '../components/Post.js'
import prf from '../images/profile-picture.jpg';



const NewPostDialog = props => {
    const [textareaContent, setTextareaContent] = useState("Co chcesz napisać?");

    const handleChange = evt => {
        setTextareaContent(evt.target.value)
        console.log(textareaContent)
      };
        const pushPost = () =>{
            
        }
    return (

            <div id="create-new-post">
                <div id="create-new-post-dialog">
                <div className="textarea">
                <ContentEditable
                    html={textareaContent} // innerHTML of the editable div
                    disabled={false} // use true to disable edition
                    onChange={handleChange} // handle innerHTML change
                />
                </div>
                <div id="gap"> </div>
                <div id="post-button" onClick={pushPost}> <p>Post</p></div>
                </div>
               
            </div>
    );
};

NewPostDialog.propTypes = {
    
};

export default NewPostDialog;