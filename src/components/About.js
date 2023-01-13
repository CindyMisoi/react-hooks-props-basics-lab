import React from "react";
import Links from "./Links";


function About(user) {
 
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* conditional rendering */}
      {user.bio && user.bio.length > 1 ? <p>{user.bio}</p> : null}
      <Links/>
    </div>
  );
  
}

export default About;
