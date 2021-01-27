import React from "react";
import peach from "../images/sarun_seepomkun.jpeg";

const personal = () => {
  return (
    <section id="showcase" className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1 className="text-weight-bold">Hi! I'm Peach</h1>
          <p>
            I've been working as a software developer since 2012,Love to learn
            new technology and new innovation.
          </p>
        </div>
        <div className="showcase-form card">
          <h2 className="text-weight-bold underline">Contact</h2>
          <form name="contact">
            <div className="form-control flex">
              <img
                src={peach}
                alt=""
                style={{
                  width: "9rem",
                  height: "11rem",
                  borderRadius: "75%",
                }}
              />
              <div>
                <p>Mr.Sarun Seepomkun</p>
                <p>Software developer</p>
                <p>Sarunseepomkun@gmail.com</p>
                {/* <p>095-920-6644</p> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default personal;
