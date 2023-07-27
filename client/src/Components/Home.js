import { React, useState } from 'react'
import '../Css/Home.css'

const Home = () => {
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
    if(window.localStorage.getItem("homereload") === "true"){
        window.location.reload()
        window.localStorage.setItem("homereload", "flase")
    }
    window.localStorage.setItem("visited", "flase")
    if(window.localStorage.getItem("visited") === "false"){
        window.localStorage.setItem("payload", "false")
        window.localStorage.setItem("visited", "true")
        window.location.reload()
    }
    

    return (
        <>
            <div className='home-section'>
                <div className="connta">
                    <div className="logo">
                    </div>
                </div>
                <div className="main">
                    <div className="welcome">Welcome to</div>
                    <div className="title">AgriNet</div>
                </div>
            </div>
            <div className="content-1" style={{ border: "3px dotted black", marginLeft: "20px", marginRight: "20px" }}>
                <div className="maincontent" style={{ textAlign: "center", backgroundColor: "rgba(211,211,211, 0.8)", }}>
                    <h1 className='homeh1' style={{ textAlign: "center", fontSize: "40px", textDecoration: "underline" }}>About Website</h1>
                    <h5 className='h5'>
                        This website serves as a valuable tool for farmers across the country, offering them the means to enhance their agricultural <br />
                        yield through the power of predictive analysis. By leveraging advanced algorithms and incorporating data on climate patterns <br />
                        and soil fertility, this platform empowers farmers to make informed decisions about their farming practices.<br /><br />

                        Upon inputting their farm data, such as crop types, planting dates, and soil composition, the website utilizes the available <br />
                        weather API and soil fertility data to generate personalized reports. These reports provide farmers with crucial insights into <br />
                        the optimal conditions for their crops, enabling them to plan their activities accordingly.<br /><br />
                        Made easy for you!
                    </h5>
                </div >
            </div >
            <div className="content-2" style={{ border: "3px dotted black", marginLeft: "20px", marginRight: "20px", }}>
                <div className="maincontent" style={{ width: "100%", backgroundColor: "rgba(211,211,211,0.37)", paddingLeft: "20px" }}>
                    <h1 className='homeh1' style={{ color: "black", textAlign: "center", webkitTextStroke: "2px white" }}>Get in Touch</h1>
                    <h5 className='h5'>
                        <form action="">
                            <div className="input-box-home">
                                <label htmlFor="cname" style = {{color: "black"}}>Enter your name:&nbsp;</label><br />
                                <input type="text" name="cname" id="cname" className="home_name input-home" value={user.cname} onChange={handleInput} /><br />
                            </div><br/>
                            <div className="input-box-home">
                                <label htmlFor="cemail" style = {{color: "black"}}>Enter your email:&nbsp;</label><br />
                                <input type="text" name="cemail" id="cemail" className="home_email input-home" value={user.cemail} onChange={handleInput} /><br />
                            </div><br/>
                            <div className="input-box-home">
                                <label htmlFor="cmessage" style = {{color: "black"}}>Enter your message:&nbsp;</label><br />
                                <textarea name="cmessage" id="cmessage" cols="30" rows="10" className='home_message' value={user.cmessage} onChange={handleInput}></textarea><br />
                            </div><br/><br/>
                            <div className="buttion-home">
                                <button type="submit" className='button-home' onClick={email}>Submit</button>
                            </div>
                        </form>
                    </h5>
                </div>
            </div>
        </>
    )
}

export default Home