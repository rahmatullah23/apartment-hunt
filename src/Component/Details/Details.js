import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Details.css'
import sub1 from '../../images/sub1.png';
import sub2 from '../../images/sub2.png';
import sub3 from '../../images/sub3.png';
import sub4 from '../../images/sub4.png';
import { UserContext } from '../../App';

const Details = () => {
    const { id } = useParams();
    const [user] = useContext(UserContext);
    const [apart, setApart] = useState({});
    const [book, setBook] = useState({name: user.name, email: user.email});

    // fetching single apartment details
    useEffect(() => {
        fetch(`https://apartment-hunt-server.herokuapp.com/apartment?id=${id}`)
        .then(res => res.json())
        .then(data => setApart(data[0]))
    }, [id]);

    // handling change
    function handleChange(e) {
        const optBook = {...book};
        optBook[e.target.name] = e.target.value;
        setBook(optBook);
    } 

    // booking apartment
    function bookApart(e) {
        e.preventDefault();
        
        fetch('https://apartment-hunt-server.herokuapp.com/booking-request',
        {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({...book, ownerEmail: apart.ownerEmail, houseName: apart.title, price: apart.price, houseId: apart._id})
        })
        .then(result => {
            console.log(result)
            document.getElementById('bookingForm').innerHTML = '<h3 class="text-success"><b>Thanks for booking!</b></h3>';
        })
    }
    
    return (
        <section id="details">
            <Navbar />
            <header id="two" className="d-flex flex-column align-items-center justify-content-center">
                <div className="title"> 
                    {apart.title && <h1 className="text-white my-0"><b>Apartment : {apart.title}</b></h1> }
                </div>
            </header>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-8">
                        <img src={apart.img} alt="" className="w-100" />
                        <div className="d-flex justify-content-between my-4">
                            <img className="w-25" src={sub1} alt=""/>
                            <img className="w-25" src={sub2} alt=""/>
                            <img className="w-25" src={sub3} alt=""/>
                            <img className="w-25" src={sub4} alt=""/>
                        </div>

                        <div className="d-flex justify-content-between mt-4">
                            <h2><b>{apart.title}</b></h2>
                            <h3><b>${apart.price}</b></h3>
                        </div>
                        
                        <p>300 sq-ft, {apart.bedromm} bedroom, Semi-furnished, Luxurious, South-facing Apartment for Rent in Rangs Malancha, Melbourne.</p>

                        <h4 className="mt-4"><b>Pricing Details -</b></h4>
                        <p>Rent/Month : ${apart.price} (negotiable)</p>
                        <p>Service Charge : 8,000/= Tk per month</p>
                        <p>Security Deposit : 3 month's rent</p>
                        <p>Flat Release Policy : 3 months earlier notice required</p>

                        <h4 className="mt-4"><b>Property Details -</b></h4>
                        <p>Address &amp; Area : Rangs Malancha, House #68, Road #6A, Dhanmondi Residential Area</p>
                        <p>Flat Size : 3000 sq-ft</p>
                        <p>Floor : A5 (5th Floor), 6 storied building, South facing unit</p>
                        <p>Room Category : {apart.bedroom} Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining &amp; Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet</p>
                        <p>Facilities : 1 Modern Lift, All Modern Amenities &amp; Semi Furnished, Electricity with full generator, Central Gas Geyser, Car Parking with Driver's Accommodation, Community Conference Hall, Roof top Beautiful Garden and Grassy Ground, Cloth Hanging Facility with CC camera</p>
                    </div>
                    <div className="col-md-4 mt-5 mt-md-0">
                        <h3 className="text-center mb-3"><b>Book Now</b></h3>
                        {
                            user.signed ?                        
                            <form id="bookingForm" onSubmit={bookApart} className="bg-light p-4">
                                <input readonly name="name" type="text" value={user.name} placeholder={"Name"} className="form-control my-3" required />
                                <input onBlur={handleChange} name="phone" type="tel" placeholder="Phone" className="form-control my-3" required />
                                <input readonly name="email" type="email" value={user.email} placeholder="Email" className="form-control my-3" required />
                                <textarea onBlur={handleChange} name="msg" cols="30" rows="5" placeholder="Message" className="form-control my-3" required></textarea>
                                <button className="btn btn-block" type="submit">Request Booking</button>
                            </form>
                            :
                            <div style={{height: "320px"}} className="d-flex justify-content-center align-items-center px-4 bg-light">
                                <Link className="btn btn-info btn-block" to="/login">Login to Book</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>            
        </section>
    );
};

export default Details;