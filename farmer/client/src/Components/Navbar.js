import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../Css/Navbar.css'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import AgrinetLogo from '../Images/Agrinet-Logo.jpg'

const Navbar = () => {
    const [userData, setUserData] = useState({});
    const { t } = useTranslation();
    const languages = [
        {
            code: 'en',
            name: 'English',
            country_code: 'fr'
        },
        {
            code: 'hi',
            name: 'Hindi',
            country_code: 'hi'
        },
        {
            code: 'bn',
            name: 'Bengla',
            country_code: 'bn'
        },
        {
            code: 'ta',
            name: 'Tamil',
            country_code: 'ta'
        },
        {
            code: 'te',
            name: 'Telgu',
            country_code: 'te'
        },
        {
            code: 'pa',
            name: 'Punjabi',
            country_code: 'pa'
        }
    ]
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
    }, []);
    const RenderMenu = () => {
        if (window.localStorage.getItem("payload") === "true") {
            return (
                <nav className='nav-navbar' style={{ "display": "inlineFlex" }}>
                    <Link to="/" className="a-navbar">Home</Link>
                    <Link to="/about" className="a-navbar">Profile</Link>
                    <Link to="/buyer" className="a-navbar">Our Buyers</Link>
                    <Link to="/transporter" className="a-navbar">Our Transporters</Link>
                    <Link to="/notification-farmer" className="a-navbar">Notification</Link>
                    <Link to="/requests" className="a-navbar">My Requests</Link>
                    <Link to="/weatherdetails" className='a-navbar'>Weather Detials</Link>
                    <Link to="/logout" className="a-navbar">Logout</Link>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            🌐
                        </button>
                        <ul class="dropdown-menu">
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code}><button class="dropdown-item" onClick={() => { i18next.changeLanguage(code) }}>{name}</button></li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )
        } else if (window.localStorage.getItem("payload") === "false") {
            return (
                <nav className='nav-navbar' style={{ "display": "inlineFlex" }}>
                    <Link to="/" className="a-navbar">{t("Home")}</Link>
                    <Link to="/login" className="a-navbar">{t("Sign In")}</Link>
                    <Link to="/signup" className="a-navbar">{t("Sign Up")}</Link>
                    <Link to="/team" className="a-navbar">{t("Our Team Members")}</Link>
                    <div class="dropdown" style={{ "width": "50px", "alignSelf": "center" }}>
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            🌐
                        </button>
                        <ul class="dropdown-menu">
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code}><button class="dropdown-item" onClick={() => { i18next.changeLanguage(code) }}>{name}</button></li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav className='nav-navbar' style={{ "display": "inlineFlex" }}>
                    <Link to="/" className="a-navbar">Home</Link>
                    <Link to="/login" className="a-navbar">Sign In</Link>
                    <Link to="/signup" className="a-navbar">Sign Up</Link>
                    <Link to="/team" className="a-navbar">Our Team Members</Link>
                    <div class="dropdown" style={{ "width": "50px" }}>
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            🌐
                        </button>
                        <ul class="dropdown-menu">
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code}><button class="dropdown-item" onClick={() => { i18next.changeLanguage(code) }}>{name}</button></li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )
        }
    }
    return (
        <div>
            <header className='header-navbar' style={{ "display": "inlineFlex", width: "100%" }}>
                <img src={AgrinetLogo} alt="Agrinet Logo" style={{ height: "105px", margin: "0", marginTop: "-25px", marginBottom: "-22px", borderRadius: "8px" }} />
                <RenderMenu />
            </header>
        </div>
    )
}

export default Navbar
