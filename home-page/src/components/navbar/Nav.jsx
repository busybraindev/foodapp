import React, { useContext, useState } from "react";
import "./nav.css";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { sc } from "../context/Context";

const Nav = ({ ssh }) => {
  const [mn, smn] = useState("home");
  const { gtc } = useContext(sc);
  return (
    <div className="nav">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="nm">
        <Link
          to={"/"}
          onClick={() => smn("home")}
          className={mn === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#em"
          onClick={() => smn("menu")}
          className={mn === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#ad"
          onClick={() => smn("mobile")}
          className={mn === "mobile" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#ft"
          onClick={() => smn("contact")}
          className={mn === "contact" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="nr">
        <img src={assets.search_icon} alt="" />
        <div className="ns">
          <Link to={"/ct"}>
            {" "}
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={gtc() === 0 ? " " : "dot"}></div>
        </div>
        <button onClick={() => ssh(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Nav;
