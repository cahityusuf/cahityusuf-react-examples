import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/index";
import { fetchUser } from "../actions/index";
import UserHeader from './userHeader';

const PostList = (props) => {

  useEffect(() => {
    props.fetchPost();
  }, []);

  const postList = props.posts.map((post) => {
    return (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId}/>
        </div>
      </div>
    );
  });
  return <div className="ui relaxed divided list">{postList}</div>;
};

const mapStateToProp = (state) => {

  return {
    posts: state.posts,
    users: state.users,
  };
};

export default connect(mapStateToProp, { fetchPost, fetchUser })(PostList);
