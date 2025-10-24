import React, { useState, useEffect } from "react"
import ProductSearch from "./ProductSearch"
import HeaderButton from "./HeaderButton"

// Importing images
import theme from "../img/header/theme.svg"
import location from "../img/header/location.svg"
import favourite from "../img/header/favourite.svg"

import avatar from "../img/header/logo.svg"

class Header extends React.Component {
    render() {
        return (
            <header className="item header">
                <ProductSearch />
                <HeaderButton onClick={this.switchTheme} text="Тема" src={theme} />
                <HeaderButton onClick={this.chooseLocation} text="г. Москва" src={location} />
                <HeaderButton onClick={this.goToFavourite} text="Избранное" src={favourite} />
                <img src={avatar} alt="аватар пользователя" width="50" height="50" />
            </header>
        )
    }

    switchTheme() {
        console.log("switch theme")
    }

    chooseLocation() {
        console.log("choose location")
    }

    // функция будет в App.js по идее
    goToFavourite() {
        console.log("go to favourite")
    }
}

export default Header