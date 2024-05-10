import React, { useState } from 'react';
import axios from 'axios';
import './UserForm.css';

function UserForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [batch, setBatch] = useState('');
    const [projectName, setProjectName] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [staffName, setStaffName] = useState('');  // New state variable for staffName
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [submissionError, setSubmissionError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({});
        setFormSubmitted(false);
        setSubmissionError('');

        // Validate form data
        let formIsValid = true;
        const validationErrors = {};

        // Validate username
        if (!username) {
            validationErrors.username = 'Username is required.';
            formIsValid = false;
        }

        // Validate password
        if (!password) {
            validationErrors.password = 'Password is required.';
            formIsValid = false;
        }

        // Validate batch
        if (!batch) {
            validationErrors.batch = 'Batch is required.';
            formIsValid = false;
        }

        // Validate project name
        if (!projectName) {
            validationErrors.projectName = 'Project Name is required.';
            formIsValid = false;
        }

        // Validate college name
        if (!collegeName) {
            validationErrors.collegeName = 'College Name is required.';
            formIsValid = false;
        }

        // Validate staff name
        if (!staffName) {
            validationErrors.staffName = 'Staff Name is required.';
            formIsValid = false;
        }

        // Update errors state
        setErrors(validationErrors);

        if (formIsValid) {
            const formData = {
                username,
                password,
                batch,
                projectName,
                collegeName,
                staffName,  // Add staffName to form data
            };

            // Log form data to the console
            console.log('Form Data:', formData);

            try {
                // Send form data to the server using Axios
                const response = await axios.post('http://localhost:9832/api/users/add', formData);

                // If submission is successful, check response for success status
                if (response.status >= 200 && response.status < 300) {
                    setFormSubmitted(true);
                    console.log('Data successfully submitted!');
                }
            } catch (error) {
                console.error('Error during submission:', error);
                setSubmissionError('Error during submission. Please try again.');
            }
        }
    };

    return (
        <div className="user-form-container">
            <div className="user-form-card">
                <div className="user-form-card-body">
                    <h3 className="user-form-header">Create the Student ID</h3>
                    <form onSubmit={handleSubmit}>
                        {/* Username input */}
                        <div className="user-form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="user-form-input"
                                id="username"
                                placeholder='Ex: Ahinaaz'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            {errors.username && (
                                <p className="user-form-error">{errors.username}</p>
                            )}
                        </div>

                        {/* Password input */}
                        <div className="user-form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="user-form-input"
                                id="password"
                                placeholder='Ex: Ahinaaz@123'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {errors.password && (
                                <p className="user-form-error">{errors.password}</p>
                            )}
                        </div>

                        {/* Batch input */}
                        <div className="user-form-group">
                            <label htmlFor="batch">Batch</label>
                            <input
                                type="text"
                                className="user-form-input"
                                id="batch"
                                placeholder='Ex: A01'
                                value={batch}
                                onChange={(e) => setBatch(e.target.value)}
                                required
                            />
                            {errors.batch && (
                                <p className="user-form-error">{errors.batch}</p>
                            )}
                        </div>

                        {/* Project Name input */}
                        <div className="user-form-group">
                            <label htmlFor="projectName">Project Name</label>
                            <input
                                type="text"
                                className="user-form-input"
                                id="projectName"
                                placeholder='Ex: AI'
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                required
                            />
                            {errors.projectName && (
                                <p className="user-form-error">{errors.projectName}</p>
                            )}
                        </div>

                        {/* College Name input */}
                        <div className="user-form-group">
                            <label htmlFor="collegeName">College Name</label>
                            <input
                                type="text"
                                className="user-form-input"
                                id="collegeName"
                                placeholder='Ex: Alpl College'
                                value={collegeName}
                                onChange={(e) => setCollegeName(e.target.value)}
                                required
                            />
                            {errors.collegeName && (
                                <p className="user-form-error">{errors.collegeName}</p>
                            )}
                        </div>

                        {/* Staff Name input */}
                        <div className="user-form-group">
                            <label htmlFor="staffName">Staff Name</label>
                            <input
                                type="text"
                                className="user-form-input"
                                id="staffName"
                                placeholder='Ex: John Doe'
                                value={staffName}
                                onChange={(e) => setStaffName(e.target.value)}
                                required
                            />
                            {errors.staffName && (
                                <p className="user-form-error">{errors.staffName}</p>
                            )}
                        </div>

                        {/* Submit button */}
                        <button type="submit" className="user-form-button">
                            Submit
                        </button>

                        {/* Submission feedback messages */}
                        {formSubmitted && (
                            <p className="text-success text-center mt-3">
                                Data successfully submitted!
                            </p>
                        )}
                        {submissionError && (
                            <p className="user-form-error text-center mt-3">
                                {submissionError}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserForm;
