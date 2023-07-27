import React, { useEffect, useState } from 'react';
import Buyerimg from '../Images/Wholesale.jpg'
import { useNavigate } from 'react-router-dom';
import '../Css/Buyer.css'
import GreenButtonWithPopover from './GreenButtonWithPopover';

const Notificationfarmer = () => {
  const history = useNavigate()
  const [buyerData, setUserData] = useState({});
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('[data-toggle="popover"]').popover();
  });

  const getbuyerdata = async () => {
    try {
      const res = await fetch("/getFarmerrequest", {
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
      history('/seller-login')
      console.log(error)
    }
  }

  useEffect(() => {
    getbuyerdata();
  });
  buyerData.length = Object.keys(buyerData).length;
  console.log(Array.prototype.slice.call(buyerData, 4));

  var sliced = [];
  for (var i = 0; i < 4; i++)
    sliced[i] = buyerData[i];
  console.log(sliced);

  return (
    <div className="grid grid-4-col" style={{ marginLeft: "50px" }}>
      {
        Array.isArray(buyerData) && buyerData.map(buyerdatas => {
          return (
            <div className="card-buyer" key={buyerdatas._id}>
              <div class="card-img-buyer">
                <img src={Buyerimg} alt="Buyer Img" className='img-buyer' />
              </div>
              <div class="card-content-buyer">
                <h2 className='h2-buyer'>Buyer</h2>
                <p className='p-buyer'>
                  Name of Buyer:&nbsp; {buyerdatas.name_buyer}<br />
                  Email of Buyer:&nbsp; {buyerdatas.email_buyer}<br />
                  Selling Price:&nbsp; {buyerdatas.bprice}<br />
                  Status:&nbsp; {buyerdatas.type}
                </p>
              </div>
            </div>
          )
        })
      }
    </div>
  )

}

export default Notificationfarmer
