import React from 'react';
import './Professional.css'
import images from '../../../images/ge2.jpg'
const Professional = () => {
    return (
        <section className='Professional-section my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="pro-img-section">
                            <img src={images} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="professional-topic">
                            <div className="topic">
                                <h3>A problem is a chance for you to do your best.</h3>
                                <p className='text-dark'>The only thing necessary for the triumph of evil is for good men to do nothing. Goodness is about character - integrity, honesty, kindness, generosity, moral courage, and the like. More than anything else, it is about how we treat other people..</p>
                            </div>

                            <div className="user-part d-flex">
                                <div className="customer ">
                                    <h1>2000+</h1>
                                    <p>Happy Customer</p>
                                </div>

                                <div className="customer">
                                    <h1>100+</h1>
                                    <p>Total Service</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Professional;