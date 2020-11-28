import React from 'react';
import { Link } from 'react-router-dom';
import bed from '../../images/bed.png';
import bath from '../../images/bath.png';
import map from '../../images/map.png';

const SearchResult = ({ locations }) => {
    return (
        locations.map(apartment =>
            <div key={apartment._id} className="col-sm-6 col-md-6 col-lg-4 mb-4">
                <div className="card h-100 border-0">
                    <img src={apartment.img} alt="" className="card-img-top" style={{maxHeight: '198px'}} />
                    <div className="card-body px-1">
                        <h3 className="my-1"><b>{apartment.title}</b></h3>
                        <p className="mt-3"><img width="15px" src={map} alt=""/> 
                        <span className="ml-1">{apartment.location}</span></p>
                        <div className="d-flex justify-content-around">
                            <p><img width="15px" src={bed} alt=""/> <span>{apartment.bedroom} Bedrooms</span></p>
                            <p><img width="15px" src={bath} alt=""/> <span>{apartment.bathroom} Bathroom</span></p> 
                        </div>
                        <div className="d-flex justify-content-around ">
                            <h3 className="price"><b>${apartment.price}</b></h3>
                            <Link className="btn px-4" to={`/apartment/${apartment._id}`}>
                                View Details
                            </Link>
                        </div> 
                    </div>                  
                </div>
            </div>
        )
    );
};

export default SearchResult;