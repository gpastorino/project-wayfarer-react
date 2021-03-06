import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostInteraction from '../PostInteraction/PostInteraction';

import './PostMini.css';

const PostMini = props => {
  return(
    <div className="border rounded text-dark bg-light container d-flex flex-column align-items-start justify-content-center m-2 p-2">
      <div className="text-dark bg-light container d-flex flex-row align-items-start justify-content-center m-0">
        <div className="container col-sm-3 d-flex flex-column align-items-center justify-content-center">
          <img className="rounded border post-mini-img" src="https://images.unsplash.com/photo-1570432871838-d61aed09f144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
        </div>
        <div className="col-sm-9 d-flex flex-column align-items-center justify-content-center">
          <div className="bg-dark m-2 p-2 rounded container row-sm-2 d-flex flex-column align-items-center justify-content-center">
            <Link to={`/post/${props.postData._id}`} className="d-flex align-self-start post-mini-title" postData={props.postData}>
              <h4 className="d-flex align-self-start post-mini-title text-light">{props.postData.title}</h4>
            </Link>
            <small className="d-flex align-self-start text-light">by {props.postData.author}</small>
          </div>
          <div className="row-sm-2 d-flex flex-column align-items-center justify-content-center">
            <p>{props.postData.content}</p>
          </div>
        </div>
      </div>
      <div className="text-dark bg-light container d-flex flex-column mt-0 mb-1">
        <PostInteraction postData={props.postData} updatePosts={props.updatePosts} />
      </div>
    </div>
  );
};

export default withRouter(PostMini);
