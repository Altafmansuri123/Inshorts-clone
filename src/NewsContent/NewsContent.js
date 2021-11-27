import { Container } from '@material-ui/core'
import React from 'react'
import "./NewsContent.css"

const NewsContent = () => {
    return (

        <Container maxWidth="md">
            <div className="downloadMessage">
                <span className="downloadText">
                    For the best experience use inshorts app on your smartphone
                </span>
                <img
                    height="80%"
                    src="https://assets.inshorts.com/website_assets/images/appstore.png"
                    alt="app store"
                />
                <img
                    height="80%"
                    src="https://assets.inshorts.com/website_assets/images/playstore.png"
                    alt="play store"
                />
            </div>
        </Container>

    )
}

export default NewsContent
