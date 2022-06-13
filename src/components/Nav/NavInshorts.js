import { Box } from '@mui/material'
import React from 'react'
import './NavInshort.css'

import HamburgerMenu from '../HamburgerMenu.js'

const NavInshorts = ({ category, setCategory }) => {
    return (
        <Box className='nav'>
            <div className="menu">
                <HamburgerMenu category={category} setCategory={setCategory} />
            </div>
            <img className='logo' src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt='logo' />
        </Box>
    )
}

export default NavInshorts
