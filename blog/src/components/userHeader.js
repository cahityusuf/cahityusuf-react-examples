import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";

const UserHeader = (props) => {

  useEffect(() => {
      props.fetchUser(props.userId);
    //console.log(props.userid);
  }, [props.userId]);
  //const user = props.users.find((user) => user.id === props.userId);
  if (!props.users) {
    return <div>Loading...</div>;
  }

  return (
    <div className="header">{props.userId != 0 ? props.users.name : ""}</div>
  );
};

const mapStateToProp = (state, ownProps) => {
  return {
    users: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProp, { fetchUser })(UserHeader);
