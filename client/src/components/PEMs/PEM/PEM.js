import React, { useState } from "react";
import "./pemStyle.css";
import Footer from "../../Home/Footer/Footer";
export default function PEM({
  pems,
  workers,
  setWorkers,
  sortWorkersBydistance,
  customer,
}) {
  console.log(customer);
  const [check, setcheck] = useState(false);
  const num = "+9330451798";
  return (
    <>
      {workers.length === 0 ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <div className="backgroundStyle">
            <br />
            <center>
              <h1 className="heading">
                <b>Here are the best workers for you!!</b>
              </h1>
            </center>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-primary distclass"
              onClick={() => {
                sortWorkersBydistance();
                setcheck(!check);
              }}
            >
              Sort By Distance
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select
              className="btn btn-secondary dropdown-toggle"
              name="Occupation"
              id="selectOccupation"
              onChange={(e) => {
                if (e.target.value !== "All") {
                  setWorkers(
                    pems.filter(
                      (worker) => worker.occupation === e.target.value
                    )
                  );
                } else {
                  setWorkers(pems);
                }
              }}
            >
              <option value="All">All</option>
              <option value="Plumber">Plumber</option>
              <option value="Electrician">Electrician</option>
              <option value="Mechanic">Mechanic</option>
            </select>
            <div>
              <div className="container">
                <div className="row" id="ads">
                  <br />
                  {workers.map((worker, key) => (
                    <>
                      <div className="col-md-4">
                        <div
                          className="card pemCard text-white card-has-bg click-col"
                        >
                          <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                              <h3 className="card-meta mb-2" key={key}>
                                {worker.name}
                              </h3>
                              <h4 className="card-title mt-0 ">
                                <h5 className="text-white" key={key}>
                                  {worker.occupation}
                                </h5>
                              </h4>
                              <small>
                                <i className="fas fa-city"></i> {worker.city}
                              </small>
                            </div>
                            <div className="card-footer">
                              <div className="media">
                                <img
                                  className="mr-3 rounded-circle"
                                  src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-512.png"
                                  alt="Generic placeholder"
                                  style={{ maxWidth: "50px" }}
                                />
                                <div className="media-body">
                                  <h6 className="my-0 text-white d-block">
                                    Phone : {worker.phoneNo}
                                  </h6>
                                  <small>{worker.address}</small>
                                  <h5>{worker.distance} km</h5>

                                  <button
                                    type="button"
                                    className="btn btn-primary distclass"
                                    onClick={() => {
                                      fetch(
                                        `https://b-genius.onrender.com/send-text?recipient=${num}&customer=${customer.userName}&lat=${customer.latitude}&lon=${customer.longitude}`
                                      ).catch((err) => console.error(err));
                                      alert(
                                        `location shared to ${worker.occupation} ${worker.name}`
                                      );
                                    }}
                                  >
                                    Send location to {worker.name}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
