import React, { useState } from "react";
import { Country, State } from "country-state-city";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Shipping = () => {
const {shippingInfo} =useSelector(state=>state.cart);

  const [hNo, setHNo] = useState(shippingInfo.hNo);
  const [city, setCity] = useState(shippingInfo.city);
  const [country, setCountry] = useState(shippingInfo.country);
  const [state, setState] = useState(shippingInfo.state);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [pincode, setPincode] = useState(shippingInfo.pincode);

const dispatch = useDispatch();
const navigate = useNavigate();


const submitHandler=(e)=>{
e.preventDefault();
dispatch({
  type:"addShippingInfo",
  payload:{
    hNo,city,state,country,pincode,phoneNo
  }
});
localStorage.setItem("shippingInfo",JSON.stringify({
  hNo,city,state,country,pincode,phoneNo
}))
navigate("/confirmorder");
}

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No."
            required
              value={hNo} onChange={(e) => setHNo(e.target.value)}
            />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City"
            required

              value={city} onChange={(e) => setCity(e.target.value)}

            />
          </div>
          <div>
            <label>Country</label>

            <select
            required

              value={country} onChange={(e) => setCountry(e.target.value)}

            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
      {
        country &&     <div>
            <label>State</label>

            <select
            required

                value={state} onChange={(e) => setState(e.target.value)}

              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            
          </div>
      }
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode"
            required

              value={pincode} onChange={(e) => setPincode(e.target.value)}

            />
          </div>
          <div>
            <label>Phone No.</label>
            <input type="number" placeholder="Enter Phone No."
            required

              value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}

            />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
