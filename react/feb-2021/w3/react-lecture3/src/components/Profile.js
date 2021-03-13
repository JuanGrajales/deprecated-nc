import React from "react";

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.match ? props.match?.params.param1 : "User"}</h1>
    </div>
  );
};

// if (props.match) {
//   return props.match.params.userid;
// } else {
//   return "User";
// }

export default Profile;
