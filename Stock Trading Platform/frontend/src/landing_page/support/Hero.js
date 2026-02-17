/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-4" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-4 m-5">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <div className="d-flex flex-wrap gap-2 mt-2">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-3" >
          <h1 className="fs-3">Featured</h1>
          <div className="d-flex flex-wrap gap-2 mt-2">
            <a href="">Current Takeovers and Delisting - January 2024</a>
            <a href="">Latest Intraday leverages - MIS & CO</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
