import React from "react";
import johns_hopkins from "../images/certificate/johns_hopkins.jpg";
import michigan from "../images/certificate/michigan.png";
import ucdavis from "../images/certificate/ucdavis.png";
import hkust from "../images/certificate/hkust.png";
import google from "../images/certificate/google.jpg";

const certificate = () => {
  return (
    <section id="certificate" className="certificate">
      <h2 className="md text-center mt-6 text-weight-bold">Certificates</h2>
      <div className="container grid grid-4">
        <div className="card text-center">
          <h4>HTML , CSS , Javascript</h4>
          <img
            src={johns_hopkins}
            alt="HTML, CSS, and Javascript for Web Developers"
            style={{ maxWidth: "170px", maxHeight: "120px" }}
          />
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/LBFLM4T4AJHB"
            rel="noreferrer"
            target="_blank"
          >
            Credential
          </a>
        </div>
        <div className="card text-center">
          <h4>Web Responsive</h4>
          <img
            src={michigan}
            alt="Advanced Styling with Responsive Design"
            style={{ maxWidth: "180px", maxHeight: "90px" }}
          />
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/8BHK7HD9SYJS"
            rel="noreferrer"
            target="_blank"
          >
            Credential
          </a>
        </div>
        <div className="card text-center">
          <h4>SQL for Data Science</h4>
          <img
            src={ucdavis}
            alt="SQL for Data Science"
            style={{ maxWidth: "120px", maxHeight: "110px" }}
          />
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/U2RPY7KK8MTG"
            rel="noreferrer"
            target="_blank"
          >
            Credential
          </a>
        </div>
        <div className="card text-center">
          <h4>NodeJS MongoDB</h4>
          <img
            src={hkust}
            alt="Server-side Development with NodeJS, Express and MongoDB"
            style={{ maxWidth: "150px", maxHeight: "140px" }}
          />
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/ZMT927NJVMUT"
            rel="noreferrer"
            target="_blank"
          >
            Credential
          </a>
        </div>
        <div className="card text-center">
          <h4>Crash Course on Python</h4>
          <img
            src={google}
            alt="Crash Course on Python"
            style={{ maxWidth: "160px", maxHeight: "100px" }}
          />
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/58M5WRPP7Z3X"
            rel="noreferrer"
            target="_blank"
          >
            Credential
          </a>
        </div>
      </div>
    </section>
  );
};

export default certificate;
