import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <main className="row align-items-around footer">
            <div className="col-md-6 col-12 offset-md-1 align-self-center">
                <h2>Let us Handle Your <br/> project, professionally.</h2>
                <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
            </div>
            <div className="col-md-6 col-md-4" style={{paddingTop:40 , flex:0}}>
                    <input type="text" class="form-control" id="formGroupExampleInput"  placeholder="Your Name"/> <br/>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Your Company Name"/> <br/>
                    <input type="text" class="form-control align-self-baseline" id="formGroupExampleInput2" placeholder="Message" style={{height:300}}/> <br/>
                    <button className="btn btn-dark">Send</button>
            </div>
        </main>
    );
};

export default Footer;