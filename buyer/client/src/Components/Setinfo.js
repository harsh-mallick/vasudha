import React from 'react'
import '../Css/Login.css'
import keyimage from '../Images/key.png'
import atimage from '../Images/at.png'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Setinfo = () => {
    const history  = useNavigate()
    const [user, setUser] = useState({
        Crptype: "",
        offerprice: ""
    });

    let name, value;
    const handleInput = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }


    const postData = async (e) => {
        e.preventDefault();
        const { Crptype, offerprice} = user
        console.log(user)

        const res = await fetch("/updatebuyer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Crptype, offerprice
            })
        });
        const data = await res.json();
        console.log(data)
        console.log(res.status)
        if (res.status === 422 || res.status === 404 || !data) {

            window.alert("Could not Update")
            console.log("Could not Update")

        } else if (res.status === 500) {
            window.alert("Internal Server Error")
            console.log("Internal Server Error")
        } else {
            window.alert("Update Successful");
            console.log("Update Successful");
            window.location.reload()
            history('/')
        };
    }
        return (
            <div className='body-login'>
                <div className="wapper-login">
                    <div className="form-login">
                        <h2 className='h2-login'>Update Buyer Profile Info</h2>
                        <form action="#">
                            <div className="input-box-login">
                                <label for="Email" onselectstart="return false" onmousedown="return false">Enter the crops you want to buy: - </label>
                                <img src={atimage} alt="Crptype" className='img-login' />
                                <br />
                                <input type="text" required className='input-login' name="Crptype" value={user.Crptype} onChange={handleInput} />
                            </div>
                            <div className="input-box-login">
                                <label for="Password">Enter the price you pay for crops:- </label>
                                <img src={keyimage} alt="email" className='img-login' />
                                <br />
                                <input type="text" required className='input-login' name="offerprice" value={user.offerprice} onChange={handleInput} />
                            </div>
                            <div className="buttion-login">
                                <button type="submit" className='button-login' onClick={postData}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    export default Setinfo
