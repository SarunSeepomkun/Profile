import React from "react";

const hobbies = () => {
  return (
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
  );
};

export default hobbies;
