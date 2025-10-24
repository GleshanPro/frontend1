import React from "react"
import SearchHelper from "./SearchHelper.js"
import Feed from "./Feed.js"

class FeedMain extends React.Component {

    render() {
        return (
            <main className="item feed-main">
                <SearchHelper />
                <Feed />
            </main>
        )
    }
}

export default FeedMain