import React from "react";
import logo from "../img/header/logo.svg"

const Logo = () => {
    return (
        <div className="item logo">
            <img src={logo} alt="логотип" width="50" height="50" />
            <span className="title">вСрок</span>
        </div>
    )
}

export default Logo