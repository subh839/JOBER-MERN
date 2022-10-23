import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ShopSignin.css";
import UpdateShop from "../UpdateShop/UpdateShop";

import Navbar from "../Navbar/Navbar";

export default function ShopSignin() {
  const [info, setInfo] = useState({
    userName: "",
    passWord: "",
  });

  const [mainInfo, setMainInfo] = useState({
    mainUserName: "",
    mainPassWord: "",
  });
  const shops = useSelector((state) => state.shop);

  const Login = () => {
    if (
      shops.filter(
        (shop) =>
          shop.userName === info.userName && shop.passWord === info.passWord
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
                            <img src="https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-shop-store-cartoon-illustration-image_1433180.jpg" alt="hellothere" className="shopsignin_img" />
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12 shopsignin_detailscol">
                            <div className="shopsignin_details">
                              <h1 className="shopsignin_header">Sign In</h1>
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
                                className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                type="button"
                                // onClick={handleSubmit}
                                onClick={Login}
                              >
                                Log in
                              </button>

                              <a className="text-muted" href="#!">
                                Forgot password?
                              </a>
                            </div>
                            
                              <p className="shopsignin_p">Don't have an account?                           
                                <Link to="/ShopJoin">
                                    Sign Up
                                </Link>
                                </p>   
                                </div>
                  </div>
                          
                      
                    </div>
                  </div>
        </>
      ) : (
        <UpdateShop
          shopDetails={
            shops.filter(
              (shop) =>
                shop.userName === info.userName &&
                shop.passWord === info.passWord
            )[0]
          }
        />
      )}
    </>
  );
}
