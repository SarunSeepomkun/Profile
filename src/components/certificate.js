import React from "react";
import cert_johns_hopkins from "../images/certificate/cert_johns_hopkins.png";
import cert_michigan from "../images/certificate/cert_michigan.png";
import cert_ucdavis from "../images/certificate/cert_ucdavis.png";
import cert_nodejs_hku from "../images/certificate/cert_nodejs_hku.png";
import cert_web_python_javascript from "../images/certificate/cert_cs50.png";

const certificate = () => {

  return (
    <section id="certificate" className="certificate">
      <h2 className="md text-center mt-6 text-weight-bold">Certificates</h2>
      <div className="container grid grid-4">
        <div className="card">
          <h4>HTML , CSS , Javascript</h4>
          <img
            src={cert_johns_hopkins}
            alt="HTML, CSS, and Javascript for Web Developers"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/LBFLM4T4AJHB"
            rel="noreferrer"
            target="_blank"
            className="tag-bottom-center text-secondary"
          >
            See Credential
          </a>
        </div>
        <div className="card">
          <h4>Web Responsive</h4>
          <img
            src={cert_michigan}
            alt="Advanced Styling with Responsive Design"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/8BHK7HD9SYJS"
            rel="noreferrer"
            target="_blank"
            className="tag-bottom-center text-secondary"
          >
            See Credential
          </a>
        </div>
        <div className="card">
          <h4>SQL for Data Science</h4>
          <img
            src={cert_ucdavis}
            alt="SQL for Data Science"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/U2RPY7KK8MTG"
            rel="noreferrer"
            target="_blank"
            className="tag-bottom-center text-secondary"
          >
            See Credential
          </a>
        </div>
        <div className="card">
          <h4>NodeJS, Express and MongoDB</h4>
          <img
            src={cert_nodejs_hku}
            alt="Server-side Development with NodeJS, Express and MongoDB"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/ZMT927NJVMUT"
            rel="noreferrer"
            target="_blank"
            className="tag-bottom-center text-secondary"
          >
            See Credential
          </a>
        </div>
        <div className="card">
          <h4>Web Programming with Python and JavaScript</h4>
          <img
            src={cert_web_python_javascript}
            alt="CS50's Web Programming with Python and JavaScript"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
          <a
            href="https://certificates.cs50.io/16b96edf-7854-4600-a537-a5e50485d371.pdf"
            rel="noreferrer"
            target="_blank"
            className="tag-bottom-center text-secondary"
          >
            See Credential
          </a>
        </div>
      </div>
    </section>
  );
};

export default certificate;
