import React from "react";
import Links from "./Links";


function About(user) {
 
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{user.bio}</p>
      {/* conditional rendering */}
     
      <Links/>
    </div>
  );
  
}

export default About;
