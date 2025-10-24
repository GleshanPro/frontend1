import React from "react";
import ProductCard from "./ProductCard";

import axios from 'axios'

const backendUrl = 'http://localhost:8080/feed';

class Feed extends React.Component {
    
    constructor(props) {
        super(props)
        axios.get(backendUrl).then((res) => {
            console.log(res.data)
            this.setState({ data: res.data })
        }).catch(error => {
            console.error('Ошибка при получении данных:', error);
        })

        this.state = {
            data: {}
        }
    }
    render() {
        return (
            <div className="feed">
                <ProductCard product={{ name: "Круассан"}} />
                <ProductCard product={{ name: "Круассан"}} />
                <ProductCard product={{ name: "Круассан"}} />
                <ProductCard product={{ name: "Круассан"}} />
                <ProductCard product={{ name: "Круассан"}} />
                <ProductCard product={{ name: "Круассан"}} />
                <ProductCard product={{ name: "Круассан"}} />
                <ProductCard product={{ name: "Круассан"}} />
                <ProductCard product={{ name: "Круассан"}} />
                <ProductCard product={{ name: "Круассан"}} />
                <p>
                   Объект: {JSON.stringify(this.state.data)}
                </p>
            </div>
        )
    }
}

export default Feed