import React from "react";

const SearchHelperItem = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default SearchHelperItem