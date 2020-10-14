import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServiceList from '../ServiceList/ServiceList';
import Testimonial from '../Testimonial/Testimonial';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServiceList></ServiceList>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;