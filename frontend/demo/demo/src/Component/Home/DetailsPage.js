import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for sending data to the server
import './DetailsPage.css'; // Import custom CSS file

const DetailsPage = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [college, setCollege] = useState('');
    const [errors, setErrors] = useState({});
    const [formSubmissionStatus, setFormSubmissionStatus] = useState(null); // Tracks form submission status
    const [serverErrorMessage, setServerErrorMessage] = useState(''); // Tracks server error messages

    const validateForm = () => {
        const newErrors = {};
        // Validate name
        if (!name.trim()) {
            newErrors.name = 'Name is required.';
        }
        // Validate phone number
        const phoneRegex = /^[6-9][0-9]{9}$/;
        if (!phoneRegex.test(phoneNumber)) {
            newErrors.phoneNumber = 'Phone number must be a 10-digit number.';
        }
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.email = 'Email is invalid.';
        }
        // Validate college
        if (!college.trim()) {
            newErrors.college = 'College name is required.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormSubmissionStatus(null); // Reset form submission status
        setServerErrorMessage(''); // Reset server error message
        
        if (validateForm()) {
            const formData = {
                name,
                phoneNumber,
                email,
                college,
            };
    
            try {
                // Send form data to the server using Axios
                const response = await axios.post('http://localhost:9832/api/person-details', formData);
                // If the response is successful, set form submission status to success
                setFormSubmissionStatus('success');
            } catch (error) {
                console.error('Error sending data:', error);
                // If an error occurs during submission, set form submission status to error
                // Set server error message
                setFormSubmissionStatus('error');
                setServerErrorMessage('Error sending data. Please try again.');
            }
        } else {
            setFormSubmissionStatus('error');
        }
    };

    return (
        <div className="details-container">
            <div className="details-content">
                <h2>Take More Advice from Our Team</h2>
                <p>Fill in the form below to receive personalized advice from our team:</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            className="form-control"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            className="form-control"
                            type="tel"
                            maxLength={10}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            className="form-control"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label>College Name:</label>
                        <input
                            className="form-control"
                            type="text"
                            value={college}
                            onChange={(e) => setCollege(e.target.value)}
                            required
                        />
                        {errors.college && <p className="error">{errors.college}</p>}
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                
                {/* Display form submission status */}
                {formSubmissionStatus === 'success' && (
    <p style={{ color: 'green', textAlign: 'center' }}>Data is submitted successfully!</p>
)}
{formSubmissionStatus === 'error' && (
    <p style={{ color: 'red', textAlign: 'center' }}>Please enter the correct details.</p>
)}

                
                {/* Display server error message */}
                {serverErrorMessage && (
                    <p className="error">{serverErrorMessage}</p>
                )}
            </div>
        </div>
    );
};

export default DetailsPage;
