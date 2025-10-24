import React from 'react'
import FeedPage from './pages/FeedPage'
import axios from 'axios'

const backendUrl = 'http://localhost:8080/feed'

class App extends React.Component {

    constructor(props) {
        super(props)
        axios.get(backendUrl).then((res) => {
            console.log(res.data)
            // this.setState({ title: res.data.title })
        }).catch(error => {
            console.error('Ошибка при получении данных:', error);
        })

        this.state = {
            title: ""
        }
    }

    render() {
        return (<div>
            <FeedPage />
        </div>)
    }
}

export default App