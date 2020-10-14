import React from 'react';
import ShowTestimonial from '../ShowTestimonial/ShowTestimonial';
import picOne from '../../../images/customer-1.png'
import picTwo from '../../../images/customer-2.png'
import picThree from '../../../images/customer-3.png'

const review=[
    {
        name: 'Donald Trump',
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, accusamus!",
        company: 'CEO, Brain Campus',
        pic: picOne
    },
    {
        name: 'Norendro Modi',
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, accusamus!",
        company: 'CEO, Oregami Soluation',
        pic: picTwo
    },
    {
        name: 'Karlos Pike',
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, accusamus!",
        company: 'CEO, Leaders Board',
        pic: picThree
    },
]
const Testimonial = () => {
    return (
        <section>
            <div>
                <h2 style={{textAlign:"center", paddingTop:200}}>Client's <span style={{color:"green"}}> Review</span> </h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className=" w-75 row d-flex" style={{marginTop: 50}}>
                    {
                        review.map(comments=><ShowTestimonial comments={comments}></ShowTestimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;