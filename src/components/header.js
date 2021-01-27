import React from "react";

const header = () => {
  return (
    <header className="navbar">
      {/* <h1 className="logo">Profile</h1> */}
      <div className="container flex">
        <ul>
          <li>
            <a href="#showcase">Home</a>
          </li>
          <li>
            <a href="#languages">Skill</a>
          </li>
          <li>
            <a href="#exprerience">Exprerience</a>
          </li>
          {/* <li>
              <a href="#hobbies">Hobbies</a>
            </li> */}
          <li>
            <a href="#projects">Project</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default header;
