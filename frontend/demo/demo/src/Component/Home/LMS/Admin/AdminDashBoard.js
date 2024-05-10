import React from 'react';

function AdminDashBoard() {
    return (
        <div>
            <div className='cseBg3'>
                <div className='container'>
                    <div className='row mx my-4'>
                        <div className='col-md-12'>
                            <h3 className="text-center" style={{ color: 'white' }}>Welcome To ALPL AdminBoard</h3>
                            <h6 style={{ color: 'white' }}>
                                {/* Additional description can be added here */}
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="container">
                    {/* <h2 style={{ color: 'white', textAlign: 'center', marginBottom: "52px" }}>
                        Only Staff Can See This Page
                    </h2> */}

                    <div className="row">
                        {/* Card 1: Create Student Account */}
                        <div className="col-md-4 my-5">
                            <div className="card" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                <div className="card-body d-flex align-items-end" style={{ backgroundColor: 'black' }}>
                                    <a href="/Alpl/QUxQTCtBZG1pbithZGQrU3R1ZW50K0BOZXdTdHVkZW50K0ZvclRoZUxtc1BvcnRhbEZyb20tJE5ldytTdHVkZW50/Admin/Add"
                                        className="btn btn-black w-100 p-2-5">
                                        <span style={{ color: 'white', fontWeight: 'bold' }}>Create Student Account (Ashok, Maahee,Dhanush)</span>
                                    </a>
                                </div>
                                {/* Hover effect for the card */}
                                <style jsx>{`
                                    .card:hover img {
                                        transform: scale(1.2);
                                    }
                                `}</style>
                            </div>
                        </div>

                        {/* Card 2: New Student Details */}
                        <div className="col-md-4 my-5">
                            <div className="card" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                <div className="card-body d-flex align-items-end" style={{ backgroundColor: 'black' }}>
                                    <a href="/Alpl/QUxQTCtBZG1pbithZGQrU3R1ZW50K0BOZXdTdHVkZW50K0ZvclRoZUxtc1BvcnRhbEZyb20tJE5ldytTdHVkZW50/Admin/emp/add"
                                        className="btn btn-black w-100 p-2-5">
                                        <span style={{ color: 'white', fontWeight: 'bold' }}>New Student Details (Staff)</span>
                                    </a>
                                </div>
                                {/* Hover effect for the card */}
                                <style jsx>{`
                                    .card:hover img {
                                        transform: scale(1.2);
                                    }
                                `}</style>
                            </div>
                        </div>

                        {/* Card 3: Student Data */}
                        <div className="col-md-4 my-5">
                            <div className="card" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                <div className="card-body" style={{ backgroundColor: 'black' }}>
                                    <a href="/Alpl/QUxQTCtBZG1pbithZGQrU3R1ZW50K0BOZXdTdHVkZW50K0ZvclRoZUxtc1BvcnRhbEZyb20tJE5ldytTdHVkZW50/Admin/Std+Dtl"
                                        className="btn btn-black w-100 p-2-5">
                                        <span style={{ color: 'white', fontWeight: 'bold' }}>Student Data (MADMB)</span>
                                    </a>
                                </div>
                                {/* Hover effect for the card */}
                                <style jsx>{`
                                    .card:hover img {
                                        transform: scale(1.2);
                                    }
                                `}</style>
                            </div>
                        </div>

                        {/* Card 4: Student Payment */}
                        <div className="col-md-4 my-3">
                            <div className="card" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                <div className="card-body" style={{ backgroundColor: 'black' }}>
                                    <a href="/Alpl/QUxQTCtBZG1pbithZGQrU3R1ZW50K0BOZXdTdHVkZW50K0ZvclRoZUxtc1BvcnRhbEZyb20tJE5ldytTdHVkZW50/Admin/Std+Dtl1"
                                        className="btn btn-black w-100 p-2-5">
                                        <span style={{ color: 'white', fontWeight: 'bold' }}>Student Payment (Accountent and Ashok )</span>
 
                                    </a>
                                </div>
                                {/* Hover effect for the card */}
                                <style jsx>{`
                                    .card:hover img {
                                        transform: scale(1.2);
                                    }
                                `}</style>
                            </div>
                        </div>

                        {/* Card 5: CEO */}
                        <div className="col-md-4 my-3">
                            <div className="card" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                <div className="card-body" style={{ backgroundColor: 'black' }}>
                                    <a href="/Alpl/QUxQTCtBZG1pbithZGQrU3R1ZW50K0BOZXdTdHVkZW50K0ZvclRoZUxtc1BvcnRhbEZyb20tJE5ldytTdHVkZW50/Admin/AbCdElO123@-forme!"
                                        className="btn btn-black w-100 p-2-5">
                                        <span style={{ color: 'white', fontWeight: 'bold' }}>CEO</span>
                                    </a>
                                </div>
                                {/* Hover effect for the card */}
                                <style jsx>{`
                                    .card:hover img {
                                        transform: scale(1.2);
                                    }
                                `}</style>
                            </div>
                        </div>

                        {/* Card 6: Modify The Student */}
                        <div className="col-md-4 my-3">
                            <div className="card" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                <div className="card-body" style={{ backgroundColor: 'black' }}>
                                    <a href="/Alpl/QUxQTCtBZG1pbithZGQrU3R1ZW50K0BOZXdTdHVkZW50K0ZvclRoZUxtc1BvcnRhbEZyb20tJE5ldytTdHVkZW50/Admin/Std+Mod"
                                        className="btn btn-black w-100 p-2-5">
                                        <span style={{ color: 'white', fontWeight: 'bold' }}>Modify The Student</span>
                                    </a>
                                </div>
                                {/* Hover effect for the card */}
                                <style jsx>{`
                                    .card:hover img {
                                        transform: scale(1.2);
                                    }
                                `}</style>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashBoard;
