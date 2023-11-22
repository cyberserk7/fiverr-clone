import { useState, useEffect } from "react"
import "./Navbar.scss"
import { Link, useLocation } from "react-router-dom"
import pp from "/src/assets/nilabjo-pp.jpeg"

export default function Navbar() {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const {pathname} = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);  
        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, [])

    const currentUser = {
        id: 1,
        username:"nilabjodey",
        isSeller:true,
    }

    return(
        <div className={active || pathname !== "/" ? 'navbar active' : 'navbar'}>
            <div className="container" >
                <Link to={"/"} className="link">
                    <div className="logo" onClick={() => setOpen(false)}>
                        <span className="logo-text">fiverr</span>
                        <span className="logo-dot">.</span>
                    </div>
                </Link>
                <div className="links">
                    <span className="fiverr-pro">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        Fiverr Pro
                    </span>
                    <span>Explore</span>
                    <span className="nav-language">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        English
                    </span>
                    {!currentUser && <span>Sign In</span>}
                    {!currentUser?.isSeller &&  <span>Become a Seller</span>}
                    {!currentUser && <button className={active ? 'login-btn active' : 'login-btn'}>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src={pp} alt="" />
                            <span>{currentUser?.username}</span>
                            <span>
                               {!open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                    :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>}
                            </span>
                            {open && (<div className="options">
                                {currentUser?.isSeller && (
                                    <>
                                        <Link to="/mygigs" className="link">My Gigs</Link>
                                        <Link to="/add" className="link">Add New Gig</Link>
                                    </>
                                )}
                                <Link to="/orders" className="link">Orders</Link>
                                <Link to="/messages" className="link">Messages</Link>
                                <Link className="link">Logout</Link>
                            </div>)}
                        </div>
                    )}
                </div>
            </div>
            {(active || pathname !== "/") && (
                <>
                    {/* <hr /> */}
                    <div className="divider"></div>
                    <div className="menu">
                        <Link className="link" to= "/">Graphics & Design</Link>
                        <Link className="link" to= "/">Programming & Tech</Link>
                        <Link className="link" to= "/">Digital Marketing</Link>
                        <Link className="link" to= "/">Video & Animation</Link>
                        <Link className="link" to= "/">Writing & Translation</Link>
                        <Link className="link" to= "/">Music & Audio</Link>
                        <Link className="link" to= "/">Business</Link>
                        <Link className="link" to= "/">Data</Link>
                    </div>
                </>
            )}
        </div>
    )
}