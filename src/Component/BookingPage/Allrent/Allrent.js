import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';

function OrderMain() {
    const [allBooking, setAllBooking] = useState([]);
    const [user] = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const statusStyle = [
        {color: "red"},
        {color: "orange"},
        {color: "green"}
    ]

    // fetching all booking data
    useEffect(() => {
        fetch("https://apartment-hunt-server.herokuapp.com/bookings", {
            method: "POST",
            body: JSON.stringify({ ownerEmail: user.email }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then((response) => response.json())
        .then(bookings => {
            setAllBooking(bookings);
            setLoading(false);
        });
    }, [loading, user.email]);


    // changing status
    function statusChange(id, e) {
        setLoading(true)
        fetch("https://apartment-hunt-server.herokuapp.com/bookings",
        {
            method: "PATCH",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                id: id,
                status: e.target.value,
            })
        })
        .then(response => response.json())
        .then(result => console.log(result));
    }

    return (
        <section>
            {
                loading &&
                <div className="pt-5 mt-5 d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            }
            {
                allBooking.length !== 0 && !loading ?
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBooking.map(book =>
                            <tr key={book._id}>
                                <td>{book.name}</td>
                                <td>{book.phone}</td>
                                <td>{book.email}</td>
                                <td>
                                    <select value={book.status} style={statusStyle[book.status]} className="form-control" onChange={(e) => statusChange(book._id, e)} name="status">
                                        <option value="0" style={statusStyle[0]}>Pending</option>
                                        <option value="1" style={statusStyle[1]}>On Going</option>
                                        <option value="2" style={statusStyle[2]}>Done</option>
                                    </select>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                :
                !loading && <h2 className="text-center mt-3">You Have no Booking Request!</h2> 
            }
        </section>
    )
}

export default OrderMain
