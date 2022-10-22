import React from "react";
import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.jpg";
import { FcNext, FcPrevious } from "react-icons/fc";

import "./Banner.css";

export default function Features() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Revolution comes </h5>
              <p>JOBER will help you to solve your problems.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Strangers</h5>
              <p>People who are in need of services like labours, electricians,teachers etc. , can contact them  with just some clicks. </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Job availability</h5>
              <p>You can earn from here by applying and land on job.</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <FcPrevious style={{ fontSize: "2.5rem" }} />
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <FcNext style={{ fontSize: "2.5rem" }} />
        </button>
      </div>
    </>
  );
}