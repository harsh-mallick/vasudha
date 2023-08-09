import { React, useState } from 'react'
import '../Css/Home.css'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Home = () => {
    const { t } = useTranslation();

    const [user, setUser] = useState({
        cname: "",
        cemail: "",
        cmessage: "",
    });

    let name, value;
    const handleInput = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }


    const email = async (e) => {
        e.preventDefault();
        const { cname, cemail, cmessage } = user

        const res = await fetch("/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cname, cemail, cmessage
            })
        });
        const data = await res.json();
        console.log(data)
        console.log(res.status)
        if (res.status === 422 || res.status === 404 || !data) {

            window.alert("Cannot send message")
            console.log("Cannot send message")

        } else if (res.status === 500) {
            window.alert("Internal Server Error")
            console.log("Internal Server Error")
        } else {
            window.alert("Message sent Successfully");
            console.log("Message sent Successfully");
            setUser("")
        };
    }
    if (window.localStorage.getItem("homereload") === "true") {
        window.location.reload()
        window.localStorage.setItem("homereload", "flase")
    }

    window.localStorage.setItem("visited", "flase")
    const payloadfalse = () => {
        if (window.localStorage.getItem("visited") === "false") {
            window.localStorage.setItem("payload", "false")
            window.localStorage.setItem("visited", "true")
            window.location.reload()
        }
    }
    window.addEventListener("load", payloadfalse)

    return (
        <>
            <div className='home-section' id="home-section">
                <div className="connta">
                    <div className="logo">
                    </div>
                </div>
                <div className="main">
                    <div className="welcome">{t('welcome.part1')}</div>
                    <div className="title">{t('AgriNet')}</div>
                </div>
            </div>
            <div className="content-1" style={{ border: "3px dotted black", marginLeft: "20px", marginRight: "20px" }}>
                <div className="maincontent" style={{ textAlign: "center", backgroundColor: "rgba(211,211,211, 0.8)", }}>
                    <h1 className='homeh1' style={{ textAlign: "center", fontSize: "40px", textDecoration: "underline" }}>{t('description.title')}</h1>
                        <h5 className='h5'>{t('description.d1')} <br />
                        {t('description.d2')} <br />
                        {t('description.d3')}<br /><br />

                        {t('description.d4')} <br />
                        {t('description.d5')} <br />
                        {t('description.d6')}<br /><br />
                        {t('description.d7')}
                    </h5>
                </div >
            </div >
            <div className="content-2" style={{ border: "3px dotted black", marginLeft: "20px", marginRight: "20px", }}>
                <div className="maincontent" style={{ width: "100%", backgroundColor: "rgba(211,211,211,0.37)", paddingLeft: "20px" }}>
                    <h1 className='homeh1' style={{ color: "black", textAlign: "center", webkitTextStroke: "2px white" }}>{t('contact.title')}</h1>
                        < h5 className='h5'>
                        <form action="">
                            <div className="input-box-home">
                                <label htmlFor="cname" style={{ color: "black" }}>{t('contact.tb1')}&nbsp;</label><br />
                                    < input type="text" name="cname" id="cname" className="home_name input-home" value={user.cname} onChange={handleInput} /><br />
                            </div><br />
                            <div className="input-box-home">
                                <label htmlFor="cemail" style={{ color: "black" }}>{t('contact.tb2')}&nbsp;</label><br />
                                    < input type="text" name="cemail" id="cemail" className="home_email input-home" value={user.cemail} onChange={handleInput} /><br />
                            </div><br />
                            <div className="input-box-home">
                                <label htmlFor="cmessage" style={{ color: "black" }}>{t('contact.tb3')}&nbsp;</label><br />
                                    <textarea textarea name="cmessage" id="cmessage" cols="30" rows="10" className='home_message' value={user.cmessage} onChange={handleInput}></textarea><br />
                            </div><br /><br />
                            <div className="buttion-home">
                                <button type="submit" className='button-home' onClick={email}>{t('Submit')}</button>
                            </div>
                        </form>
                    </h5>
                </div>
            </div>
        </>
    )
}

export default Home