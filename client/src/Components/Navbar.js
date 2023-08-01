import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../Css/Navbar.css'

const Navbar = () => {
    const [userData, setUserData] = useState({});
    const callAboutPage = async () => {
        try {
            const res = await fetch("/getFarmerdata", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })

            const data = await res.json();
            console.log(data)
            setUserData(data)

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }
        } catch (error) {
        }
    }

    useEffect(() => {
        callAboutPage();
    });
    const RenderMenu = () => {
        if (window.localStorage.getItem("payload") === "true") {
            if (userData.role === "Farmer") {
                return (
                    <nav className='nav-navbar'>
                        <Link to="/" className="a-navbar">Home</Link>
                        <Link to="/about" className="a-navbar">Profile</Link>
                        <Link to="/buyer" className="a-navbar">Our Buyers</Link>
                        <Link to="/transporter" className="a-navbar">Our Transporters</Link>
                        <Link to="/notification-farmer" className="a-navbar">Notification</Link>
                        <Link to="/logout" className="a-navbar">Logout</Link>
                    </nav>
                )
            } else if (userData.role === "Buyer") {
                if (userData.Crptype === "" || userData.offerprice === "") {
                    return (
                        <nav className='nav-navbar'>
                            <Link to="/" className="a-navbar">Home</Link>
                            <Link to="/about" className="a-navbar">Profile</Link>
                            <Link to="/farmer" className="a-navbar">Our Farmers</Link>
                            <Link to="/transporter" className="a-navbar">Our Transporters</Link>
                            <Link to="/notification-buyer" className="a-navbar">Notification</Link>
                            <Link to="/set-info" className="a-navbar">Set Information</Link>
                            <Link to="/logout" className="a-navbar">Logout</Link>
                        </nav>
                    )
                }else{
                    return (
                        <nav className='nav-navbar'>
                            <Link to="/" className="a-navbar">Home</Link>
                            <Link to="/about" className="a-navbar">Profile</Link>
                            <Link to="/farmer" className="a-navbar">Our Farmers</Link>
                            <Link to="/transporter" className="a-navbar">Our Transporters</Link>
                            <Link to="/notification-buyer" className="a-navbar">Notification</Link>
                            <Link to="/set-info" className="a-navbar">Set Information</Link>
                            <Link to="/logout" className="a-navbar">Logout</Link>
                        </nav>
                    )
                }
            } else if (userData.role === "Transporter") {
                return (
                    <nav className='nav-navbar'>
                        <Link to="/" className="a-navbar">Home</Link>
                        <Link to="/about" className="a-navbar">Profile</Link>
                        <Link to="/requests-transporter" className="a-navbar">Transporting Requests</Link>
                        <Link to="/logout" className="a-navbar">Logout</Link>
                    </nav>
                )
            }

        } else if (window.localStorage.getItem("payload") === "false") {
            return (
                <nav className='nav-navbar'>
                    <Link to="/" className="a-navbar">Home</Link>
                    <Link to="/login" className="a-navbar">Sign In</Link>
                    <Link to="/signup" className="a-navbar">Sign Up</Link>
                    <Link to="/team" className="a-navbar">Our Team Members</Link>
                </nav>
            )
        }else{
            return (
                <nav className='nav-navbar'>
                    <Link to="/" className="a-navbar">Home</Link>
                    <Link to="/login" className="a-navbar">Sign In</Link>
                    <Link to="/signup" className="a-navbar">Sign Up</Link>
                    <Link to="/team" className="a-navbar">Our Team Members</Link>
                </nav>
            )
        }
    }
    return (
        <div>
            <header className='header-navbar'>
                <h2 className='h2-navbar'>Vasudha</h2>
                <RenderMenu />
            </header>
        </div>
    )
}

export default Navbar
