import React from "react";

const Profile = (props) => {
  return (
    <React.Fragment>
      <h1>Hello {props.match.params.username}</h1>
    </React.Fragment>
  );
};

export default Profile;
