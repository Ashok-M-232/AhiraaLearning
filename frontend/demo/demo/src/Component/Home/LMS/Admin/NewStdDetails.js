import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import './NewStdDetails.css';

function NewStdDetails() {
    const [forms, setForms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [staffSearchQuery, setStaffSearchQuery] = useState(''); // State variable for staff name search
    const [filteredForms, setFilteredForms] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentForm, setCurrentForm] = useState(null);
    const [mode, setMode] = useState('add');

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:9832/api/form');
                setForms(response.data);
                setFilteredForms(response.data);
            } catch (error) {
                setError('Failed to fetch data. Please try again.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Filter forms based on search query and staff name search query
    useEffect(() => {
        const filterForms = () => {
            const filtered = forms.filter(form =>
                form.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                form.projectName.toLowerCase().includes(searchQuery.toLowerCase())
            );

            // Filter the forms further by staff name
            const staffFiltered = filtered.filter(form =>
                form.staffName.toLowerCase().includes(staffSearchQuery.toLowerCase())
            );

            setFilteredForms(staffFiltered);
        };
        filterForms();
    }, [searchQuery, staffSearchQuery, forms]);

    // Handle search query changes
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Handle staff name search query changes
    const handleStaffSearchChange = (event) => {
        setStaffSearchQuery(event.target.value);
    };

    // Handle showing modal for adding or editing a form
    const handleShowModal = (mode, form = null) => {
        setMode(mode);
        setCurrentForm(form || {
            name: '',
            fatherName: '',
            phoneNumber: '',
            email: '',
            college: '',
            paymentID: '',
            paymentAmount: '',
            paymentBalance: '',
            projectName: '',
            staffName: '',
            dateTime: '', // Initialize dateTime
        });
        setShowModal(true);
    };

    // Handle hiding the modal
    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentForm(null);
    };

    // Handle form submission (add or edit)
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (mode === 'add') {
                // Add new form entry
                const response = await axios.post('http://localhost:9832/api/form/add', currentForm);
                setForms([...forms, response.data]);
            } else if (mode === 'edit') {
                // Edit existing form entry
                const response = await axios.put('http://localhost:9832/api/form', currentForm);
                const updatedForms = forms.map(form => form.paymentID === response.data.paymentID ? response.data : form);
                setForms(updatedForms);
            }
            // Update filtered forms
            setFilteredForms(forms);
            setShowModal(false);
        } catch (error) {
            setError('Failed to save form. Please try again.');
        }
    };

    // Handle delete confirmation
    const handleDeleteConfirmation = (form) => {
        setCurrentForm(form);
        setShowModal(true);
    };

    // Handle delete
    const handleDelete = async () => {
        if (currentForm) {
            try {
                await axios.delete(`http://localhost:9832/api/form/${currentForm.paymentID}`);
                const updatedForms = forms.filter(form => form.paymentID !== currentForm.paymentID);
                setForms(updatedForms);
                setFilteredForms(updatedForms);
                setShowModal(false);
            } catch (error) {
                setError('Failed to delete form. Please try again.');
            }
        }
    };

    return (
        <div className="form-table-container container mt-4">
            <h3 className="form-table-header">New Student</h3>

            {/* Loading spinner */}
            {loading && (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}

            {/* Error message */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Search bars */}
            {!loading && !error && (
                <>
                    {/* General search bar */}
                    <div className="mb-3">
                        <label htmlFor="search-bar" className="form-label">Search:</label>
                        <input
                            type="text"
                            id="search-bar"
                            className="form-control"
                            placeholder="Search by name or project name..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>

                    {/* Staff name search bar */}
                    <div className="mb-3">
                        <label htmlFor="staff-search-bar" className="form-label">Search by Staff Name:</label>
                        <input
                            type="text"
                            id="staff-search-bar"
                            className="form-control"
                            placeholder="Search by staff name..."
                            value={staffSearchQuery}
                            onChange={handleStaffSearchChange}
                        />
                    </div>
                </>
            )}

            {/* Data table */}
            {!loading && !error && (
                <table className="form-table table table-striped table-bordered table-responsive">
                    <thead>
                        <tr>
                            <th>Payment ID</th>
                            <th>Name</th>
                            <th>Father's Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>College</th>
                            <th>Payment Amount</th>
                            <th>Payment Balance</th>
                            <th>Project Name</th>
                            <th>Staff Name</th>
                            <th>Date and Time</th> {/* New column for date and time */}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredForms.map(form => (
                            <tr key={form.paymentID}>
                                <td>{form.paymentID}</td>
                                <td>{form.name}</td>
                                <td>{form.fatherName}</td>
                                <td>{form.phoneNumber}</td>
                                <td>{form.email}</td>
                                <td>{form.college}</td>
                                <td>{form.paymentAmount}</td>
                                <td>{form.paymentBalance}</td>
                                <td>{form.projectName}</td>
                                <td>{form.staffName}</td>
                                <td>{form.dateTime}</td> {/* Display date and time */}
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteConfirmation(form)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Modal for confirming deletion */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this form entry?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default NewStdDetails;
