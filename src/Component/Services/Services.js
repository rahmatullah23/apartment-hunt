import React from 'react';
import './Services.css';
import service1 from '../../images/service1.png';
import service2 from '../../images/service2.png';
import service3 from '../../images/service3.png';

const Services = () => {
    return (
        <section id="services" className="text-center py-5">
            <div className="container pb-5">
                <p>SERVICES</p>
                <h2><b>We're an agency tailored to all<br/> client's needs that always delivers</b></h2>
                <div className="row mt-5 pt-4 text-center">
                    <div className="col-md-4 mb-4">
                        <img width="70px" src={service1} alt=""/>
                        <h5 className="my-4"><b>Wide Range of Properties</b></h5>
                        <p className="text-secondary">
                            With a robust selection of popular properties on hand, as well as leading propertiesfrom experts.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <img width="70px" src={service2} alt=""/>
                        <h5 className="my-4"><b>Financing Made Easy</b></h5>
                        <p className="text-secondary">
                            Our stress-free finance department that can find financial solutions to save you money.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <img width="70px" src={service3} alt=""/>
                        <h5 className="my-4"><b>Trusted by Thousands</b></h5>
                        <p className="text-secondary">
                            10 new offers every day. 350 offers on site, trusted by a community of thousands of users
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;