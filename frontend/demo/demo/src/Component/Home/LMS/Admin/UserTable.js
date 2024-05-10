import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

    return (
        <div className="user-table-container container mt-4">
            <h3 className="user-table-header">Student Data</h3>

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
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default UserTable;
