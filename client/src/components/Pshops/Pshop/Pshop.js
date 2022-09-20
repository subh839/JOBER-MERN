import React from "react";
import { Link } from "react-router-dom";

export default function Pshop({ PshopsObj }) {
  // console.log(PshopsObj);

  return (
    <>
      {PshopsObj.length === 0 ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <div className="container eleccontainer">
            <div className="banner">
              <h1>Plumber Shops</h1>
            </div>          
            <div className="row">
                {PshopsObj.map((Pshop, key) => (
                  <>
                    <div className="col-lg-4 mb-4">
                      <div className="card">
                        <img
                          src="http://geersplumbing.com/wp-content/uploads/2011/05/orange-county-bath-remodel-22.jpg"
                          alt=""
                          className="card_image"
                        />
                        <div className="card-body">
                          <h2 className="card-title">
                            <b>{Pshop.shopName}</b>
                          </h2>
                          <p className="card-text">{Pshop.description}</p>
                          <p>
                            City : <b>{Pshop.city}</b>
                          </p>
                          <p>
                            Address : <b>{Pshop.address}</b>
                          </p>
                          <br />
                          <i className="fas fa-user"></i> Owner :{" "}
                          {Pshop.ownerName} <br />
                          <i className="fas fa-phone-square"></i> Phone :{"     "}
                          {Pshop.phoneNo} <br />
                          <i className="fas fa-envelope-square"></i>Mail :{" "}
                          {Pshop.email} <br /> <br />
                          <Link
                            to={{
                              pathname: `/Items?${Pshop._id}`,
                              state: {
                                shopprop: true,
                              },
                            }}
                          >
                            <button type="button" className="boxbutton">
                                Items
                            </button>
                          </Link>
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
