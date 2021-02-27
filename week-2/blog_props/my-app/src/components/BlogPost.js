import React from 'react';
import '../styles.css'





function BlogPost(props){
    return(
        <div className="post-container">
            <h3 className="post">{props.title}</h3>
            <h3 className="post">{props.subTitle}</h3>
            <h3 className="post">{props.author}</h3>
            <h3 className="post">{props.date}</h3>
            <hr/>
        </div>
    )
}

export default BlogPost;