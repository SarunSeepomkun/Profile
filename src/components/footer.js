import React from "react";

const footer = () => {
  return (
    <footer className="footer bg-dark py-5">
      <div className="container flex flex-space-between">
        <div>
          <h1>Sarun Seepomkun</h1>
          <p>Copyright &copy; 2021</p>
        </div>
        <div className="social">
          <a
            target="_blank"
            href="https://linkedin.com/in/sarun-seepomkun-653051b5"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            target="_blank"
            href="https://github.com/SarunSeepomkun"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
