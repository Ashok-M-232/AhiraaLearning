import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Lms.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// Configure axios to use the base URL of the Spring Boot server
axios.defaults.baseURL = 'http://localhost:9832';

function Lms({ setIsAuthenticated }) {
    // State for form inputs and messages
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [redirectToNextPage, setRedirectToNextPage] = useState(false);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Make POST request to authenticate user at /api/users/add
            const response = await axios.post('/api/users/add', {
                username,
                password,
            });

            // If successful, set authentication state and trigger redirect
            if (response.data && response.data.success) {
                setIsAuthenticated(true);
                setRedirectToNextPage(true);
            } else {
                throw new Error('Login failed');
            }
        } catch (err) {
            // Handle error by showing error message
            setError('Login failed. Please check your username and password.');
        }
    };

    // Redirect to the next page if login is successful
    if (redirectToNextPage) {
        return <Navigate to="/next-page" replace />;
    }

    return (
        <div className="BGLMS d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 mt-5">
                        <div className="card red-card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <h3 className="text-center">Login</h3>

                                    {/* Username input */}
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Password input */}
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Display error message */}
                                    {error && <div className="alert alert-danger">{error}</div>}

                                    {/* Submit button */}
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lms;
