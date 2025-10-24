import React from "react";
import ProductCard from "./ProductCard";

class Feed extends React.Component {
    render() {
        return (
            <div className="feed">
                <ProductCard product={{ name: "Круассан"}} />
            </div>
        )
    }
}

export default Feed