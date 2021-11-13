import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Services = ({ servicesWork }) => {
    console.log("servicesWork", servicesWork);
    return (

        <div className='col-lg-4 mb-3 '>
            <div className="card-section">
                <div className="services-container text-center">


                    {
                        servicesWork.image && <img src={`data:image/jpeg;base64,${servicesWork.image.img}`}/>
                    }
                </div>
                <div className="caption-post-section text-center">
                    <p> ${servicesWork.price}</p>
                    <h4>{servicesWork.title}</h4>

                    <h6>{servicesWork.description}</h6>
                    <br></br>

                </div>

                <div className="explore-more text-center">
                    <Link to={`/details/${servicesWork._id}`} ><button >Buy Now</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Services;