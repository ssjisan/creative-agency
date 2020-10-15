import React from 'react';
import Service from '../Service/Service';
import fakeData from '../../fakedata/fakedata'
const serviceList = fakeData; 

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