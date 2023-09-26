import React from 'react'
import BlogTitle from './BlogTitle';
import BlogContent from './BlogContent';
import BlogAuthor from './BlogAuthor';
import BlogFooter from './BlogFooter';

const Blogpost = () => {
  return (
    <div>
    <BlogTitle/>
    <BlogContent/>
    <BlogAuthor/>
    <BlogFooter/>
    </div>
  );
}

export default Blogpost;