import React from "react";
import document from "../images/document.png";
import logo_virus from "../images/logo_virus128.png";
import users_project from "../images/users_128.png";
import videocall from "../images/videocall.png";

const projects = () => {
  return (
    <section id="projects" className="projects bg-gradient">
      <div className="container">
        <div className="text-center">
          <h2 className="md text-center mt-6 text-weight-bold">
            Simple projects on free time
          </h2>
          <div className="container grid grid-4">
            {/* Video call */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://ipeach-videocall.netlify.app/"
            >
              <div className="card">
                <h4>Video call</h4>
                <img
                  src={videocall}
                  alt="videocall"
                  style={{ width: "64px", height: "65px" }}
                />
                <h6>ReactJS, Bootstrap, ExpressJS, Socket.io</h6>
              </div>
            </a>

            {/* Usernamegement */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://ipeach-usermanagement.netlify.app/"
            >
              <div className="card">
                <h4>Usermanagement</h4>
                <img
                  src={users_project}
                  alt="Usermanagement"
                  style={{ width: "69px", height: "65px" }}
                />
                <h6>ReactJS, CSS, Firebase</h6>
              </div>
            </a>

            {/* Covid-19 Thailand */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://ipeach-covid19thailand.netlify.app/"
            >
              <div className="card">
                <h4>Covid-19(TH)</h4>
                <img
                  src={logo_virus}
                  alt="covid-19"
                  style={{ width: "64px", height: "64px" }}
                />
                <h6>ReactJS, CSS, API</h6>
              </div>
            </a>

            {/* Todolist */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://ipeach-todoapp.netlify.app/"
            >
              <div className="card">
                <h4>Todolist</h4>
                <img
                  src={document}
                  alt="document"
                  style={{ width: "64px", height: "64px" }}
                />
                <h6>ReactJS, CSS, Firebase</h6>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default projects;
