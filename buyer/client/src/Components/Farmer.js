import React, { useEffect, useState } from 'react';
import Buyerimg from '../Images/Wholesale.jpg'
import { useNavigate } from 'react-router-dom';
import '../Css/Buyer.css'
import GreenButtonWithPopover from './GreenButtonWithPopover copy';

const Buyer = () => {
  const history = useNavigate()
  const [farmerData, setFarmerData] = useState({});

  const getfarmerdata = async () => {
    try {
      const res = await fetch("/getFarmerdatas", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      })

      const data = await res.json();
      console.log(data)
      setFarmerData(data)

      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error
      }
    } catch (error) {
      history('/seller-login')
      console.log(error)
    }
  }

  useEffect(() => {
    getfarmerdata();
  });
  farmerData.length = Object.keys(farmerData).length;
  console.log(Array.prototype.slice.call(farmerData, 4));

  var sliced = [];
  for (var i = 0; i < 4; i++)
    sliced[i] = farmerData[i];
  console.log(sliced);

  return (
    <div className="grid grid-4-col" style={{ marginLeft: "50px" }}>
      {
        Array.isArray(farmerData) && farmerData.map(farmersdatas => {
          return (
            <div className="card-buyer" key = {farmersdatas._id}>
              <div class="card-img-buyer">
                <img src={Buyerimg} alt="Buyer Img" className='img-buyer' />
              </div>
              <div class="card-content-buyer">
                <h2 className='h2-buyer'>Farmers</h2>
                <p className='p-buyer'>
                  Name:&nbsp; {farmersdatas.name_farmer}<br/>
                  Mobile Number:&nbsp; {farmersdatas.phonenumber}<br/>
                  Email:&nbsp; {farmersdatas.email}<br/><br/>
                  <GreenButtonWithPopover buttonName = {"Send Buying Request"}/>
                </p>
              </div>
            </div>
          )
        })
      }
    </div>
  )

}

export default Buyer
