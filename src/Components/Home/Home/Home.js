import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServiceList from '../ServiceList/ServiceList';
import PreviousWork from '../PreviousWork/PreviousWork'
const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServiceList></ServiceList>
            <PreviousWork></PreviousWork>
            <Footer></Footer>
        </div>
    );
};

export default Home;