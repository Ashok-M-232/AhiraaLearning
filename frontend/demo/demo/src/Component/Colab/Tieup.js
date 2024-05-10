import React from 'react';
import './Tieup.css';

function Tieup() {
    return (
        <div className='tieupBG'>
            <div className="container">
                <h3 className='h1Bg my-5'>We partner with leading companies and provide workshops and teaching by company employees to deliver the best knowledge to our students.</h3>
                {/* <h3 className='h1Bg'>This Company employees are Teaching Best Knowledge to our students and Provides Workshop</h3> */}
                <div className='row IMGBGcmpy'>
                    {/* Bootstrap columns with images */}
                    <div className='col-6 col-md-3 my-5'>
                        
                            <img src={require("./Images/IBM.png")} className="card-img-top img-fluid img-thumbnail" alt="IBM Logo" />
                        
                    </div>
                    <div className='col-6 col-md-3 my-5'>
                        
                            <img src={require("./Images/INFO.jpg")} className="card-img-top img-fluid img-thumbnail" alt="INFO Logo" />
                        
                    </div>
                    <div className='col-6 col-md-3 my-5'>
                        
                            <img src={require("./Images/TCS.jpg")} className="card-img-top img-fluid img-thumbnail" alt="TCS Logo" />
                    
                    </div>
                    <div className='col-6 col-md-3 my-5'>
                            <img src={require("./Images/MS.png")} className="card-img-top img-fluid img-thumbnail" alt="MS Logo" />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tieup;
