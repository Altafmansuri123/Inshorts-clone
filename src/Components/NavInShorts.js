import React from 'react'
import "./NavInShorts.css";
import LeftDrawer from "./LeftDrawer"

function NavInShorts({ setCategory }) {
    return (

        <div className='nav'>
            <div className="icon">
                <LeftDrawer setCategory={setCategory} />
            </div>
            <img style={{ cursor: "pointer" }} src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo" height="80%" />
        </div>

    )
}

export default NavInShorts
