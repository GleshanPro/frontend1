import React from "react";
import logo from "../img/header/logo.svg"

const HeaderButton = ({ text = "Кнопка", src = "", alt = "", onClick }) => {
    return (
        <div className="btn-header">
            <button onClick={onClick}>
                {src && <img src={src} alt="" />}
            </button>
            {text} {/*надо сделать весь div кликабельным*/}
        </div>
    )
}

export default HeaderButton