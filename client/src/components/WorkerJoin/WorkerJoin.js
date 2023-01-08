import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { createPEM } from "../../actions/pem";
import { Link } from "react-router-dom";

import './worker.css';


export default function WorkerJoin() {
  const dispatch = useDispatch();
  const [pem, setPem] = useState({
    name: "",
    phoneNo: "",
    email: "",
    latitude: 0,
    longitude: 0,
    distance: 0,
    userName: "",
    passWord: "",
    city: "",
    address: "",
    occupation: "",
  });
  var submitHandler = (e) => {
    e.preventDefault();
    console.log(pem);
    dispatch(createPEM(pem));
    alert("Joined Successfully!!!");
  };

  

  

  
  return (
    <>
      <Navbar />

      <form onSubmit={submitHandler}>
      <div className="shopjoin_container container">
        <div className="shopjoin_container_inner">
          <h2 className="shopjoin_header" style={{}}>Join with us for getting work </h2>

                {/* ---------------------------------------------name, phone, email--------------------------------------------- */}
                <div className="shopjoin_form1 row">
                  <div className="col-lg-6 col-md-12">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP1V376rUt8pebidPF7HE81PE4Hd0Amh03Wg&usqp=CAU"
                      alt="hellothere"
                      className="shopsignin_img"
                    />
                  </div>

            <div className="col-lg-6 col-md-12 form_col">
              
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="inputName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        required
                        value={pem.name}
                        onChange={(e) =>
                          setPem({
                            ...pem,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="inputEmail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        required
                        value={pem.email}
                        onChange={(e) =>
                          setPem({
                            ...pem,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="inputPhone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        required
                        value={pem.phoneNo}
                        onChange={(e) =>
                          setPem({
                            ...pem,
                            phoneNo: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                {/* --------------------------------------------------userName, passWord----------------------------------------------------- */}

                
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="userName">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        required
                        value={pem.userName}
                        onChange={(e) =>
                          setPem({
                            ...pem,
                            userName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="passWord">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                        value={pem.passWord}
                        onChange={(e) =>
                          setPem({
                            ...pem,
                            passWord: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* ----------------------------------------------Lat, Long----------------------------------------------------------------- */}
                 
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="Latitude">Latitude</label>
                        <input
                          type="text"
                          className="form-control"
                          id="latitude"
                          required
                          value={pem.latitude}
                          onChange={(e) =>
                            setPem({
                              ...pem,
                              latitude: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="longitude">Longitude</label>
                        <input
                          type="text"
                          className="form-control"
                          id="longitude"
                          required
                          value={pem.longitude}
                          onChange={(e) =>
                            setPem({
                              ...pem,
                              longitude: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <br />
                    <a
                      href="https://www.latlong.net/convert-address-to-lat-long.html"
                      className="col-sm-4 btn btn-primary buttionSize"
                      target="_blank"
                      rel="noopener noreferrer"
                      height="10px"
                    >
                      Get Location
                    </a>
                  
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        required
                        value={pem.city}
                        onChange={(e) =>
                          setPem({
                            ...pem,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                {/* ------------------------------------------------Shop type, address ------------------------------------------------------- */}

                {/* <div className="col-sm-4"> */}
                <div className="form-group" style={{width:300,}}>
                  <label htmlFor="exampleFormControlTextarea1">Address</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    value={pem.address}
                    onChange={(e) =>
                      setPem({
                        ...pem,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                {/* ------------------------------------------------pem type------------------------------------------------------ */}
                <div>
                  <label htmlFor="Occupation">Occupation:</label>
                  <select
                    name="Occupation"
                    id="Occupation"
                    onChange={(e) =>
                      setPem({
                        ...pem,
                        occupation: e.target.value,
                      })
                    }
                  >
                    <option value="Plumber">Plumber</option>
                    <option value="Electrician">Electrician</option>
                    <option value="Mechanic">Mechanic</option>
                  </select>
                </div>

                {/* ----------------------------------------------------submit------------------------------------------------------------ */}
                
                <button type="submit" className="btn btn-primary">
                  <i className="fa" /> Join
                </button>
                <p className="shopsignin_p">
                  Already have an account? <Link to="/workersignin">Sign In</Link>
                </p>              
            </div>
          </div>
        </div>
      </div>
      </form>

    </>
  );
}
