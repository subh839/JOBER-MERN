import React, { useState } from "react";
import { useSelector } from "react-redux";
import Users from "./Users";
import Pems from "./Pems";
import Shops from "./Shops";
import Profile from "./Profile";

export default function AdminPage({ bio }) {
  const users = useSelector((store) => store.customer);
  const pems = useSelector((store) => store.pem);
  const shops = useSelector((store) => store.shop);
  const [check, setCheck] = useState("");
  return (
    <>
      {check === "" ? (
        <div className="admindiv">
          <center>
            <h1 style={{ color: "white" }}> Admin(org.) Page</h1>
          </center>
          <br />
          <br />
          <div className="adminsetup">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.app.goo.gl/pdxFqPH88Jw4i9pZ9"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Labours</h5>
                <p className="card-text">
                  All labours details available for your worker.
                </p>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    setCheck("PEM");
                  }}
                >
                  JOBER
                </button>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.app.goo.gl/xR1nRKh5vJiYzfgb9"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Stores nearby</h5>
                <p className="card-text">
                  View all the Shops who are registered 
                </p>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    setCheck("Shops");
                  }}
                >
                  Shops
                </button>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.app.goo.gl/YQXFKgVgfRnhUX1V9"
                className="card-img-top"
                alt="..."
                height={200}
              />
              <div className="card-body">
                <h5 className="card-title">Users</h5>
                <p className="card-text">
                  View all the Users who want to avail our services.
                </p>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    setCheck("Users");
                  }}
                >
                  Users
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <center>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setCheck("Profile");
              }}
            >
              Profile
            </button>
          </center>
        </div>
      ) : (
        <>
          {check === "Shops" ? (
            <>
              <Shops shops={shops} />
            </>
          ) : (
            <>
              {check === "PEM" ? (
                <>
                  <Pems pems={pems} />
                </>
              ) : (
                <>
                  {check === "Profile" ? (
                    <>
                      <Profile bio={bio} />
                    </>
                  ) : (
                    <>
                      <Users users={users} />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
