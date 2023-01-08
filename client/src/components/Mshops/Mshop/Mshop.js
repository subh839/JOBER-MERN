import React from "react";
import { Link } from "react-router-dom";

import "./Mshop.css";

export default function Mshop({ MshopsObj }) {
  return (
    <>
      {MshopsObj.length === 0 ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <div className="container eleccontainer">
          <div className="banner">
            <h1>Mechanical Shops</h1>
          </div>
          <div className="row">
                {MshopsObj.map((Mshop, key) => (
                  <>
                    <div className="col-lg-4 mb-4">
                      <div className="card">
                        <img
                          src="https://images.app.goo.gl/n61f6oNc7KyiQf3AA"
                          alt=""
                          className="card_image"
                        />
                        <div className="card-body">
                          <h2 className="card-title">
                            <b>{Mshop.shopName}</b>
                          </h2>
                          <p className="card-text">{Mshop.description}</p>
                          <p>
                            City : <b>{Mshop.city}</b>
                          </p>
                          <p>
                            Address : <b>{Mshop.address}</b>
                          </p>
                          <br />
                          <i className="fas fa-user"></i> Owner :{" "}
                          {Mshop.ownerName} <br />
                          <i className="fas fa-phone-square"></i> Phone :{"     "}
                          {Mshop.phoneNo} <br />
                          <i className="fas fa-envelope-square"></i>Mail :{" "}
                          {Mshop.email} <br /> <br />
                         
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
        </>
      )}
    </>
  );
}
