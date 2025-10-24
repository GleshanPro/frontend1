import React from "react"
import Header from "../components/Header"
import FeedMain from "../components/FeedPage/FeedMain"
import FilterPanel from "../components/FeedPage/FilterPanel"
import Logo from "../components/Logo"

class FeedPage extends React.Component {

    render() {
        return (
            <div className="feed-page">
                <Logo />
                <Header />
                <FilterPanel />
                <FeedMain />
            </div>
        )
    }
}

export default FeedPage