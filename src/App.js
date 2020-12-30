import "./style.css";
import "./timeline.css";
import "./utilities.css";
import csharp from "./images/csharp.png";
import sql_oracle from "./images/sql_oracle.png";
import reactjs from "./images/reactjs.png";
import webapp from "./images/web.png";
import material_ui from "./images/material_ui.png";
import rest_api from "./images/rest_api.png";
import github from "./images/github.png";
import firebase from "./images/firebase.png";
import peach from "./images/sarun_seepomkun.jpeg";
import document from "./images/document.png";
import logo_virus from "./images/logo_virus128.png";
import users_project from "./images/users_128.png";

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
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
      </div>
      {/* Showcase */}
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

      {/* Skill languages */}
      <section id="languages" className="languages">
        <h2 className="md text-center mt-6 text-weight-bold">
          Programming Skills
        </h2>
        <div className="container grid grid-4">
          <div className="card">
            <h4>Web</h4>
            <img
              src={webapp}
              alt=""
              style={{ width: "85px", height: "50px" }}
            />
          </div>
          <div className="card">
            <h4>C#</h4>
            <img
              src={csharp}
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div className="card">
            <h4>SQL (RDBMS)</h4>
            <img
              src={sql_oracle}
              alt=""
              style={{ width: "75px", height: "50px" }}
            />
          </div>
          <div className="card">
            <h4>ReactJS</h4>
            <img
              src={reactjs}
              alt=""
              style={{ width: "70px", height: "50px" }}
            />
          </div>
          <div className="card">
            <h4>Firebase (NoSQL)</h4>
            <img
              src={firebase}
              alt=""
              style={{ width: "60px", height: "50px" }}
            />
          </div>
          <div className="card">
            <h4>Material-UI</h4>
            <img
              src={material_ui}
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
            <img
              src={github}
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </div>
      </section>

      {/* Work Exprience */}
      <section id="exprerience" className="exprerience bg-primary">
        <div className="container">
          <div className="text-center">
            <h2 className="lg">Exprerience</h2>
            <div className="timeline">
              <div className="container-timeline left">
                <div className="content">
                  <h2>Graduated</h2>
                  <p>
                    2012 Grauated from kasetsart university major bachelor of
                    science in information technology.
                  </p>
                </div>
              </div>

              <div className="container-timeline right">
                <div className="content">
                  <h2>Programmer</h2>
                  <p>2012 - 2013 at Prosoftexpress company.</p>
                </div>
              </div>

              <div className="container-timeline left">
                <div className="content">
                  <h2>Programmer analyst</h2>
                  <p>
                    2013 - 2015 at Phillips capital (thailand) public limited
                    company.
                  </p>
                </div>
              </div>

              <div className="container-timeline right">
                <div className="content">
                  <h2>Software engineer</h2>
                  <p>
                    2015 - now at bank of krungsri ayudhya public company
                    limited.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section id="hobbies" className="hobbies my2">
        <h2 className="lg text-center text-weight-bold">Hobbies</h2>
        <div className="container grid grid-3">
          <div className="card flex">
            <i className="fas fa-laptop-code fa-3x"></i>
            <p>
              All my life in technology.I really love new technology when I was
              young and I grow up interested in programming as well.
            </p>
          </div>
          <div className="card flex">
            <i className="fas fa-futbol fa-3x"></i>
            <p>
              Watching football is the most sport that I love english premier
              leaguage , spainish la liga , Italian Serie A and uefa europa
              league.
            </p>
          </div>
          <div className="card flex">
            <i className="fas fa-video fa-3x"></i>
            <p>Watching TV and movies every day after finished my work.</p>
          </div>
          {/* <div className="card flex">
            <i className="fas fa-shopping-cart fa-3x"></i>
            <p>Shopping</p>
          </div>
          <div className="card flex">
            <i className="fas fa-book fa-3x"></i>
            <p>History</p>
          </div>
          <div className="card flex">
            <i className="fas fa-newspaper fa-3x"></i>
            <p>News</p>
          </div> */}
        </div>
      </section>

      {/* Sample projects */}
      <section id="projects" className="projects bg-primary">
        <div className="container">
          <div className="text-center">
            <h2 className="md text-center mt-6 text-weight-bold">Simple projects on free time</h2>
            <div className="container grid grid-4">
              {/* Usernamegement */}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://ipeach-usermanagement.netlify.app/"
              >
                <div className="card" href>
                  <h4>Usermanagement</h4>
                  <img
                    src={users_project}
                    alt="Usermanagement"
                    style={{ width: "69px", height: "65px" }}
                  />
                </div>
              </a>

              {/* Covid-19 Thailand */}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://ipeach-covid19thailand.netlify.app/"
              >
                <div className="card" href>
                  <h4>Covid-19(TH)</h4>
                  <img
                    src={logo_virus}
                    alt="covid-19"
                    style={{ width: "64px", height: "64px" }}
                  />
                </div>
              </a>

              {/* Todolist */}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://ipeach-todoapp.netlify.app/"
              >
                <div className="card" href>
                  <h4>Todolist</h4>
                  <img
                    src={document}
                    alt="document"
                    style={{ width: "64px", height: "64px" }}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark py-5">
        <div className="container flex flex-space-between">
          <div>
            <h1>Sarun Seepomkun</h1>
            <p>Copyright &copy; 2020</p>
          </div>
          <div className="social">
            <a
              target="_blank"
              href="https://github.com/SarunSeepomkun"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/sarun-seepomkun-653051b5"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            {/* <a target="_blank" href="#" rel="noopener noreferrer">
              <i className="fab fa-line fa-2x"></i>
            </a> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
