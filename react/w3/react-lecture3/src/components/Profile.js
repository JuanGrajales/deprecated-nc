import React from "react";

const Profile = (props) => {
  return (
    <div>
      <h1>Hello {props.match ? props.match.params.userid : "User"}</h1>
    </div>
  );
};

export default Profile;
