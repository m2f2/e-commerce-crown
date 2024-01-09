
// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import { FaCrown } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

import "./navigation.style.scss";

const Navigation = ()=>{
          return <Fragment>
            <div className="navigation">
             <Link className="logo-container" to='/'>
              <FaCrown className="logo"/>
             </Link>
             <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                              SHOP
                    </Link>
                    <Link className="nav-link" to='/auth'>
                              SIGN IN
                    </Link>
             </div>
            </div>
            <Outlet/>
          </Fragment>
        }

export default Navigation;