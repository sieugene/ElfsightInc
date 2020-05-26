import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'
const Header = (props:any) => {
    return(
        <>
        <div className='header'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2><NavLink to='/'>Home</NavLink></h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>
        </>
    )
}

export default Header