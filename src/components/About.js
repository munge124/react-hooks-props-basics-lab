import React from "react";
import Links from "./Links"

function About({bio, links}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <Links github={links.github} linkedin={links.linkedin} />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      
    </div>
  );
}

export default About;
