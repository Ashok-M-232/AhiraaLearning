import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap components
import './UserTable.css';

function UserTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [sortKey, setSortKey] = useState('batch');
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchQuery, setSearchQuery] = useState('');
    const [staffSearchQuery, setStaffSearchQuery] = useState('');  // New state variable for staff name search query
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);  // State variable to control modal visibility
    const [userToDelete, setUserToDelete] = useState(null);  // User being considered for deletion

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:9832/api/users');
                setUsers(response.data);
                setFilteredUsers(response.data); // Initialize filtered users
            } catch (error) {
                setError('Failed to fetch data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Filter users based on search query and staff search query
        const filterUsers = () => {
            const filtered = users.filter(user =>
                user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.batch.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.collegeName.toLowerCase().includes(searchQuery.toLowerCase())
            );

            const staffFiltered = filtered.filter(user =>
                user.staffName.toLowerCase().includes(staffSearchQuery.toLowerCase())
            );

            setFilteredUsers(staffFiltered);
        };

        filterUsers();
    }, [searchQuery, staffSearchQuery, users]);

    const handleSortChange = (event) => {
        const [key, order] = event.target.value.split('-');
        setSortKey(key);
        setSortOrder(order);

        // Sort users based on the selected key and order
        const sortedUsers = [...filteredUsers].sort((a, b) => {
            if (order === 'asc') {
                return a[key] > b[key] ? 1 : -1;
            } else {
                return a[key] < b[key] ? 1 : -1;
            }
        });

        setFilteredUsers(sortedUsers);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleStaffSearchChange = (event) => {
        setStaffSearchQuery(event.target.value);
    };

    const handleDeleteConfirmation = (user) => {
        // Open the modal and set the user to delete
        setUserToDelete(user);
        setShowModal(true);
    };

    const handleDelete = async () => {
        if (userToDelete) {
            try {
                await axios.delete(`http://localhost:9832/api/users/${userToDelete.id}`);
                // Update the list of users after deletion
                const updatedUsers = users.filter(user => user.id !== userToDelete.id);
                setUsers(updatedUsers);
                setFilteredUsers(updatedUsers);
                setShowModal(false);  // Close the modal
            } catch (error) {
                setError('Failed to delete user. Please try again.');
            }
        }
    };

    const handleCancelDelete = () => {
        // Close the modal without deleting
        setShowModal(false);
        setUserToDelete(null);
    };

    return (
        <div className="user-table-container container mt-4">
            <h3 className="user-table-header">User Data</h3>

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

            {/* General search bar */}
            {!loading && !error && (
                <div className="mb-3">
                    <label htmlFor="search-bar" className="form-label">Search:</label>
                    <input
                        type="text"
                        id="search-bar"
                        className="form-control"
                        placeholder="Search by username, batch, project name, or college name..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            )}

            {/* Staff name search bar */}
            {!loading && !error && (
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
            )}

            {/* Sort dropdown */}
            {!loading && !error && (
                <div className="sort-dropdown mb-3">
                    <label htmlFor="sort-dropdown" className="sort-dropdown-label">Sort by:</label>
                    <select
                        id="sort-dropdown"
                        className="form-select"
                        value={`${sortKey}-${sortOrder}`}
                        onChange={handleSortChange}
                    >
                        <option value="batch-asc">Batch (Ascending)</option>
                        <option value="batch-desc">Batch (Descending)</option>
                        <option value="projectName-asc">Project Name (Ascending)</option>
                        <option value="projectName-desc">Project Name (Descending)</option>
                        <option value="collegeName-asc">College Name (Ascending)</option>
                        <option value="collegeName-desc">College Name (Descending)</option>
                        <option value="username-asc">Username (Ascending)</option>
                        <option value="username-desc">Username (Descending)</option>
                        <option value="staffName-asc">Staff Name (Ascending)</option>
                        <option value="staffName-desc">Staff Name (Descending)</option>
                    </select>
                </div>
            )}

            {/* Data table */}
            {!loading && !error && (
                <table className="user-table table table-striped table-bordered table-responsive">
                    <thead>
                        <tr>
                            <th className="column-id">ID</th>
                            <th className="column-username">Username</th>
                            <th className="column-password">Password</th>
                            <th className="column-batch">Batch</th>
                            <th className="column-project">Project Name</th>
                            <th className="column-college">College Name</th>
                            <th className="column-staff">Staff Name</th>
                            <th className="column-actions">Actions</th> {/* New column for delete button */}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user.id} className="user-row">
                                <td className="column-id">{user.id}</td>
                                <td className="column-username">{user.username}</td>
                                <td className="column-password">{user.password}</td>
                                <td className="column-batch">{user.batch}</td>
                                <td className="column-project">{user.projectName}</td>
                                <td className="column-college">{user.collegeName}</td>
                                <td className="column-staff">{user.staffName}</td>
                                <td className="column-actions">
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteConfirmation(user)}
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
            <Modal show={showModal} onHide={handleCancelDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this user?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelDelete}>
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

export default UserTable;
