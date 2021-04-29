import React from "react";
import csharp from "../images/csharp.png";
import sql_oracle from "../images/sql_oracle.png";
import reactjs from "../images/reactjs.png";
import webapp from "../images/web.png";
// import material_ui from "../images/material_ui.png";
import rest_api from "../images/rest_api.png";
import github from "../images/github.png";
// import firebase from "../images/firebase.png";
import nodejs from "../images/nodejs.png";
import python from "../images/python.png";
import bootstrap from "../images/bootstrap.png";

const skills = () => {
  return (
    <section id="languages" className="languages">
      <h2 className="md text-center mt-6 text-weight-bold">
        Programming Skills
      </h2>
      <div className="container grid grid-4">
        <div className="card">
          <h4>Web</h4>
          <img src={webapp} alt="" style={{ width: "85px", height: "50px" }} />
        </div>
        <div className="card">
          <h4>C#</h4>
          <img src={csharp} alt="" style={{ width: "50px", height: "50px" }} />
        </div>
        <div className="card">
          <h4>SQL (Oracle,MSSQL)</h4>
          <img
            src={sql_oracle}
            alt=""
            style={{ width: "75px", height: "50px" }}
          />
        </div>
        <div className="card">
          <h4>ReactJS</h4>
          <img src={reactjs} alt="" style={{ width: "70px", height: "50px" }} />
        </div>
        <div className="card">
          <h4>NodeJS (ExpressJS)</h4>
          <img
            src={nodejs}
            alt="nodejs"
            style={{ width: "100px", height: "60px" }}
          />
        </div>
        <div className="card">
          <h4>Python (Django)</h4>
          <img
            src={python}
            alt=""
            style={{ width: "48px", height: "50px" }}
          />
        </div>
        <div className="card">
          <h4>Bootstrap</h4>
          <img
            src={bootstrap}
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div className="card">
          <h4>API Service</h4>
          <img
            src={rest_api}
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div className="card">
          <h4>Github</h4>
          <img src={github} alt="" style={{ width: "50px", height: "50px" }} />
        </div>
      </div>
    </section>
  );
};

export default skills;
