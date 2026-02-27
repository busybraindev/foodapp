import React, { useContext } from "react";
import "./od.css";
import { sc } from "../../components/context/Context";

const Order = () => {
  const { gtc } = useContext(sc);
  return (
    <div className="pl">
      <div className="pdl">
        <p className="title">Delivery Information</p>
        <div className="mf">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="mf">
          <input type="text" placeholder="City " />
          <input type="text" placeholder="State" />
        </div>
        <div className="mf">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="pdr">
        <div className="cbt">
          <h2>Cart Totals</h2>
          <div>
            <div className="ctd">
              <p>Subtotal</p>
              <p>${gtc()}</p>
            </div>
            <hr />
            <div className="ctd">
              <p>Delivery Fee</p>
              <p>${gtc() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="ctd">
              <b>Total</b>
              <b>${gtc() === 0 ? 0 : gtc() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
