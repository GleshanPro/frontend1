import React from "react";
import SearchHelperItem from "./SearchHelperItem";

class SearchHelper extends React.Component {
    render() {
        return (
            <div className="search-helper">
                <SearchHelperItem onClick={this.findProduct} text="Хлебобулочные изделия" />
                <SearchHelperItem onClick={this.findProduct} text="Выпечка" />
                <SearchHelperItem onClick={this.findProduct} text="Бутерброды" />
                <SearchHelperItem onClick={this.findProduct} text="Хлеб" />
            </div>
        )
    }

    findProduct() {
        console.log("find product (search helper)")
    }
}

export default SearchHelper