import React, { useState } from 'react'
import { linksData } from '../../data/linksData'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-content">
                    <Link to="/" className="nav-logo">
                        <h1 className="nav-logo_title">GMC</h1>
                    </Link>

                    <ul className={isOpen ? "nav-links show" : "nav-links"}>
                        <button className="nav-close_btn" onClick={() => setIsOpen(false)}>
                            <IoMdClose />
                        </button>
                        {
                            linksData.map((item, key) => (
                                <li className="nav-item">
                                    <Link onClick={() => setIsOpen(false)} to={item.to} className='nav-link'>{item.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <button className="nav-menu_btn" onClick={() => setIsOpen(true)}>
                        <RiMenu3Line />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar