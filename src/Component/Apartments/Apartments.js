import React from 'react';
import './Apartments.css';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchResult from './SearchResult';

const Apartments = ({ keyword }) => {
    const [allAparts, setAllAparts] = useState([]);
    const apartments = allAparts.filter(apart => apart.location.toLowerCase().includes(keyword) || apart.title.toLowerCase().includes(keyword));

    // fetching all apartment data
    useEffect(() => {
        fetch('https://apartment-hunt-server.herokuapp.com/apartment')
        .then(res => res.json())
        .then(data => setAllAparts(data))
    }, []);
    
    return (
        <section id="apartments" className="text-center py-5">
            <div className="container">
                <p>HOUSE RENTS</p>
                <h2><b>Discover the latest rents <br/> available today</b></h2>
                {
                    allAparts.length === 0 &&
                    <div className="pt-5 mt-5 d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
                <div className="row mt-5">
                    {
                        apartments.length ? 
                        <SearchResult locations={apartments} /> : <SearchResult locations={allAparts} />
                    }
                </div>
            </div>
        </section>
    );
};

export default Apartments;