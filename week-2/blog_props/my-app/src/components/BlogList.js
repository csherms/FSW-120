import React from 'react';
import BlogPost from './BlogPost'
import blogdata from './blogdata'





function BlogList(){
     const blogPostComps = blogdata.map(blog => <BlogPost key={blog.id} title={blog.title} subtitle={blog.subtitle} author={blog.author} date={blog.date} />)
    return(
        <div className="bloglist-container">
            <h2>Blog list</h2>
            {blogPostComps}
            <div className="button-container">
                <button id="button">Older Posts</button>
            </div>
        </div>
    )
}

export default BlogList;