import React from 'react';
import Service from '../Service/Service';
import ServiceOne from '../../../images/icons/service1.png'
import ServiceTwo from '../../../images/icons/service2.png'
import ServiceThree from '../../../images/icons/service3.png'
import Order from '../../Order/Order';
const serviceList = [
    {
        title: "Web and Mobile Design",
        details: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
        pic: ServiceOne
    },
    {
        title: "Graphic design",
        details: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
        pic: ServiceTwo
    },
    {
        title: "Web development",
        details: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
        pic: ServiceThree
    },
]
const ServiceList = () => {
    return (
        <section >
            <div>
            <h2 style={{textAlign:"center", paddingTop:200}}>Provide Awsome, <span style={{color:"green"}}>Services</span> </h2>
            </div>
            <div className="d-flex justify-content-center" >
                <div className=" w-75 row d-flex" style={{marginTop: 50}}>
                {
                    serviceList.map(list=><Service list={list}></Service>)
                }
                </div>
            </div>
        </section>
    );
};

export default ServiceList;