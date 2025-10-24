import React from "react"
import search from "../img/header/search.svg"


class ProductSearch extends React.Component {

    render() {
        // ограничение на кол-во букв в input?
        return (
            <div className="product-search">
                <input maxlength="30" placeholder="Поиск по товарам" />
                <button> {/*onClick={() =>...}*/}
                    <img src={search} alt="значок поиска" />
                </button>
            </div>
        )
    }
}

export default ProductSearch