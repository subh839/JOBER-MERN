import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UpdatePEM from "../UpdatePEM/UpdatePEM";

import Navbar from "../Navbar/Navbar";

export default function WorkerSignin() {
  const [info, setInfo] = useState({
    userName: "",
    passWord: "",
  });

  const [mainInfo, setMainInfo] = useState({
    mainUserName: "",
    mainPassWord: "",
  });
  const pems = useSelector((state) => state.pem);
  const Login = () => {
    if (
      pems.filter(
        (pem) =>
          pem.userName === info.userName && pem.passWord === info.passWord
      ).length === 1
    ) {
      setMainInfo({
        mainUserName: info.userName,
        mainPassWord: info.passWord,
      });
    } else {
      alert("Incorrect details!!!");
    }
  };

  return (
    <>
      {mainInfo.mainUserName === "" ? (
        <>
          <Navbar />
          <div className="shopsignin_container">
            <div className="row shopsignin_row">
              <div className="col-lg-6 col-md-12 shopsignin_imgcol col-sm-12">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaDYPhRwzSPoS-Uxukrhojj6dJk-cwurIG2w&usqp=CAU"
                  alt="hellothere"
                  className="shopsignin_img"
                />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 shopsignin_detailscol">
                <div className="shopsignin_details">
                  <h1 className="shopsignin_header">Sign In as a worker</h1>
                            <div className="form-outline mb-4">
                              <input
                                type="text"
                                id="userName"
                                required
                                className="form-control"
                                placeholder="User Name"
                                onChange={(e) =>
                                  setInfo({
                                    ...info,
                                    userName: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="password"
                                required
                                className="form-control"
                                placeholder="Password"
                                onChange={(e) =>
                                  setInfo({
                                    ...info,
                                    passWord: e.target.value,
                                  })
                                }
                              />
                            </div>

                            <div className="text-center pt-1 mb-5 pb-1">
                              <button
                                className="btn btn-warning shopsignin_btn"
                                type="button"
                                onClick={Login}
                              >
                                Log in
                              </button>
                              
                            </div>
                            <p className="shopsignin_p">
                              Don't have an account? <Link to="/WorkerJoin">Sign Up</Link>
                            </p>
                        </div>
                      </div>                      
                    </div>
                  </div>
        </>
      ) : (
        <UpdatePEM
          pemDetails={
            pems.filter(
              (pem) =>
                pem.userName === info.userName && pem.passWord === info.passWord
            )[0]
          }
        />
      )}
    </>
  );
}
