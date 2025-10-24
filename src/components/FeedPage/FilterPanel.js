import React from "react";

class FilterPanel extends React.Component {
    render() {
        return (
            <aside className="item filter-panel">
                <p>Срок годности товара</p>
                <p>Магазины поблизости</p>
                <p>Категория товара</p>
                <p>Область поиска</p>
            </aside>
        )
    }
}

export default FilterPanel