import React, { useEffect, useState } from 'react';
import '../Home/Service/Services.css'
import SingleHomeService from '../Home/SingleHomeService/SingleHomeService';



const HomeService = () => {
    const [serviceData, setServiceData] = useState([])





    useEffect(() => {
        fetch("https://evening-savannah-23942.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setServiceData(data.slice(0, 6)))
    }, [])


    return (
        <section className='background'>
            <div className="container">

                {
                    serviceData.length === 0 && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate("-50%,-50%")' }} className="spinner-border text-white my-5" role="status">
                        <span class="visually-hidden"></span> </div>

                }
                <div className="slider-part">
                    <div className="the-service-hading text-center py-5 ">

                        <h1 className='text-dark'>Our products</h1>

                    </div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="visibility active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" className='visibility' data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" className='visibility' data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="row">
                                    {
                                        serviceData.map(servicesWork => <SingleHomeService servicesWork={servicesWork}></SingleHomeService>)
                                    }
                                </div>
                            </div>

                        </div>
                        {/* <button class="carousel-control-prev visibility" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon visibility" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next visibility" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon visibility" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button> */}
                    </div>

                    {/* <div className="explore-more text-center">
                        <button>Explore More</button>
                    </div> */}
                </div>

            </div>

        </section>
    );
};

export default HomeService;