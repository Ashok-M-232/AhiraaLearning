import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DataViewPage1.css';
import { format } from 'date-fns';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const DataViewPage1 = () => {
    const [personDetails, setPersonDetails] = useState([]); // State for storing data
    const [loading, setLoading] = useState(true); // State for tracking loading status
    const [error, setError] = useState(null); // State for tracking error status
    const [searchQuery, setSearchQuery] = useState(''); // State for storing the search query
    const [fromDate, setFromDate] = useState(''); // State for the 'From' date filter
    const [toDate, setToDate] = useState(''); // State for the 'To' date filter
    const [showModal, setShowModal] = useState(false); // State to manage the modal's visibility
    const [password, setPassword] = useState(''); // State for the password entered by the user
    const correctPassword = 'Ahiraa2K24@AlPl'; // Replace this with the correct password

    const [downloadFormat, setDownloadFormat] = useState(null); // State to track the chosen download format
    const [downloadFiltered, setDownloadFiltered] = useState(false); // State to track whether to download filtered data or unfiltered data

    // Fetch data from the server when the component mounts
    useEffect(() => {
        fetchPersonDetails();
    }, []);

    const fetchPersonDetails = async () => {
        try {
            // Send a GET request to fetch all person details
            const response = await axios.get('http://localhost:9832/api/person-details');
            // Set the response data to state
            setPersonDetails(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Error fetching data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Function to handle changes in the search query
    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter personDetails based on the search query across multiple fields and date range
    const filteredPersonDetails = personDetails.filter((person) => {
        const queryLowerCase = searchQuery.toLowerCase();
        const createdAtDate = new Date(person.createdAt).toISOString().split('T')[0]; // Convert date to ISO format for comparison
        
        // Filter by query and date range
        const matchesQuery = (
            person.name.toLowerCase().includes(queryLowerCase) ||
            person.phoneNumber.includes(queryLowerCase) ||
            person.email.toLowerCase().includes(queryLowerCase) ||
            person.college.toLowerCase().includes(queryLowerCase)
        );
        
        const withinDateRange = (
            (!fromDate || createdAtDate >= fromDate) &&
            (!toDate || createdAtDate <= toDate)
        );

        return matchesQuery && withinDateRange;
    });

    // Function to export data to Excel format
    const exportToExcel = (dataToExport) => {
        // Create a workbook and a worksheet
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(dataToExport);

        // Append the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'PersonDetails');

        // Write the workbook to a file and download it
        XLSX.writeFile(workbook, 'person_details.xlsx');
    };

    // Function to export data to PDF format
    const exportToPDF = (dataToExport) => {
        // Create a new PDF document
        const doc = new jsPDF();

        // Define columns and data for the PDF
        const columns = ['ID', 'Name', 'Phone Number', 'Email', 'College', 'Created At', 'Updated At'];
        const data = dataToExport.map((person) => [
            person.id,
            person.name,
            person.phoneNumber,
            person.email,
            person.college,
            format(new Date(person.createdAt), 'yyyy-MM-dd HH:mm'),
            format(new Date(person.updatedAt), 'yyyy-MM-dd HH:mm')
        ]);

        // Add a title
        doc.text('Person Details', 14, 16);
        doc.autoTable({
            head: [columns],
            body: data,
            startY: 22,
        });

        // Save the PDF document
        doc.save('person_details.pdf');
    };

    // Function to handle password validation and download
    const handleDownload = () => {
        if (password === correctPassword) {
            const dataToExport = downloadFiltered ? filteredPersonDetails : personDetails;
            if (downloadFormat === 'excel') {
                exportToExcel(dataToExport);
            } else if (downloadFormat === 'pdf') {
                exportToPDF(dataToExport);
            }
            // Reset modal state and password after download
            setShowModal(false);
            setPassword('');
        } else {
            // Alert user if password is incorrect
            alert('Incorrect password. Please try again.');
        }
    };

    // Function to open the modal with the specified download format and whether to download filtered data
    const openModalWithFormat = (format, filtered) => {
        setDownloadFormat(format);
        setDownloadFiltered(filtered);
        setShowModal(true);
    };

    // Function to extract unique college names from filtered data
    const uniqueCollegeNames = Array.from(new Set(filteredPersonDetails.map(person => person.college)));

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h2>All Person Details</h2>
                    <div>
                        {/* Buttons to open the password modal for filtered and unfiltered data */}
                        <button className="btn btn-success me-2" onClick={() => openModalWithFormat('excel', true)}>
                            Download Filtered Excel
                        </button>
                        <button className="btn btn-success me-2" onClick={() => openModalWithFormat('excel', false)}>
                            Download All Excel
                        </button>
                        <button className="btn btn-danger me-2" onClick={() => openModalWithFormat('pdf', true)}>
                            Download Filtered PDF
                        </button>
                        <button className="btn btn-danger" onClick={() => openModalWithFormat('pdf', false)}>
                            Download All PDF
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    {/* Search and date range inputs */}
                    <div className="mb-3 d-flex align-items-center">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Search by name, phone number, email, or college..."
                            value={searchQuery}
                            onChange={handleSearchQueryChange}
                        />
                        <input
                            type="date"
                            className="form-control me-2"
                            placeholder="From"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                        />
                        <input
                            type="date"
                            className="form-control"
                            placeholder="To"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                        />
                    </div>

                    {loading ? (
                        // Display loading spinner while fetching data
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : error ? (
                        // Display error message if fetching data fails
                        <p className="text-danger text-center">{error}</p>
                    ) : (
                        // Display filtered data in a table
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>College</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPersonDetails.map((person) => (
                                    <tr key={person.id}>
                                        <td>{person.id}</td>
                                        <td>{person.name}</td>
                                        <td>{person.phoneNumber}</td>
                                        <td>{person.email}</td>
                                        <td>{person.college}</td>
                                        <td>{format(new Date(person.createdAt), 'yyyy-MM-dd HH:mm')}</td>
                                        <td>{format(new Date(person.updatedAt), 'yyyy-MM-dd HH:mm')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {/* Remaining count */}
                    {!loading && (
                        <div className="mt-3">
                            <p>Count: {filteredPersonDetails.length}</p>
                        </div>
                    )}
                    
                    {/* Unique college names */}
                    <br/>
                    <hr/>
                    {!loading && (
                        <div className="mt-3">
                            <h3 >College Names:</h3>
                            <ul>
                                {uniqueCollegeNames.map((college, index) => (
                                    <li key={index}>{college}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Password Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDownload}>
                        Download
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DataViewPage1;
