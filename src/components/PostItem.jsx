// import React, {useState} from 'react';

const PostItem = (props) => {



    return (
        <div>
            <div className="post__container">
                {props.post.title}
               <p>{props.post.body}</p>

            </div>

            <button>Delete posts</button>
        </div>
    );
};

export default PostItem;