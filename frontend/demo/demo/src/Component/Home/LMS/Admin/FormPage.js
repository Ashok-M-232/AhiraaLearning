import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './FormPage.css'; // Import custom CSS

const FormPage = () => {
  // Initialize state for form fields
  const [formData, setFormData] = useState({
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
    dateTime: '', // Initialize dateTime field
  });
  const [message, setMessage] = useState('');

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calculate the current date and time
    const currentDateTime = new Date().toISOString(); // ISO 8601 format

    // Add the current date and time to the form data
    const formDataWithDateTime = { ...formData, dateTime: currentDateTime };

    try {
        // Set the base URL for Axios (assuming the Spring Boot API is running locally on port 9832)
        const response = await axios.post('http://localhost:9832/api/form/add', formDataWithDateTime);


        if (response.status === 200) {
            // Handle success response
            setMessage('Data submitted successfully!');
        } else {
            // Handle other status codes
            setMessage('Please enter the correct details.');
        }
    } catch (error) {
        // Handle network or server error
        if (error.response && error.response.status === 400) {
            setMessage('Invalid input data. Please correct the errors and try again.');
        } else {
            setMessage('An error occurred. Please try again later.');
        }
    }
  };

  return (
    <Container className="form-page-container">
      <h2 className="form-page-heading">Form Page</h2>
      {message && <div className="form-page-alert">{message}</div>}
      <Form onSubmit={handleSubmit}>
        {/* First row */}
        <Row className="form-page-row">
          {/* Name input field */}
          <Col md={4}>
            <Form.Group controlId="name" className="form-page-group">
              <Form.Label className="form-page-label">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-page-input"
                required
              />
            </Form.Group>
          </Col>

          {/* Father's Name input field */}
          <Col md={4}>
            <Form.Group controlId="fatherName" className="form-page-group">
              <Form.Label className="form-page-label">Father's Name</Form.Label>
              <Form.Control
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className="form-page-input"
                required
              />
            </Form.Group>
          </Col>

          {/* Phone Number input field */}
          <Col md={4}>
            <Form.Group controlId="phoneNumber" className="form-page-group">
              <Form.Label className="form-page-label">Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="form-page-input"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Second row */}
        <Row className="form-page-row">
          {/* Email input field */}
          <Col md={4}>
            <Form.Group controlId="email" className="form-page-group">
              <Form.Label className="form-page-label">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-page-input"
                required
              />
            </Form.Group>
          </Col>

          {/* College input field */}
          <Col md={4}>
            <Form.Group controlId="college" className="form-page-group">
              <Form.Label className="form-page-label">College</Form.Label>
              <Form.Control
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="form-page-input"
                required
              />
            </Form.Group>
          </Col>

          {/* Project Name input field */}
          <Col md={4}>
            <Form.Group controlId="projectName" className="form-page-group">
              <Form.Label className="form-page-label">Project Name</Form.Label>
              <Form.Control
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                className="form-page-input"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Third row */}
        <Row className="form-page-row">
          {/* Payment Amount input field */}
          <Col md={4}>
            <Form.Group controlId="paymentAmount" className="form-page-group">
              <Form.Label className="form-page-label">Payment Amount</Form.Label>
              <Form.Control
                type="number"
                name="paymentAmount"
                value={formData.paymentAmount}
                onChange={handleChange}
                className="form-page-input"
                required
              />
            </Form.Group>
          </Col>

          {/* Payment Balance input field */}
          <Col md={4}>
            <Form.Group controlId="paymentBalance" className="form-page-group">
              <Form.Label className="form-page-label">Payment Balance</Form.Label>
              <Form.Control
                type="number"
                name="paymentBalance"
                value={formData.paymentBalance}
                onChange={handleChange}
                className="form-page-input"
                required
              />
            </Form.Group>
          </Col>

          {/* Payment ID input field */}
          <Col md={4}>
            <Form.Group controlId="paymentID" className="form-page-group">
              <Form.Label className="form-page-label">Payment ID</Form.Label>
              <Form.Control
                type="text"
                name="paymentID"
                value={formData.paymentID}
                onChange={handleChange}
                className="form-page-input"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Fourth row */}
        <Row className="form-page-row">
          {/* Staff Name input field */}
          <Col md={4}>
            <Form.Group controlId="staffName" className="form-page-group">
              <Form.Label className="form-page-label">Staff Name</Form.Label>
              <Form.Control
                type="text"
                name="staffName"
                value={formData.staffName}
                onChange={handleChange}
                className="form-page-input"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Submit button */}
        <Button
          type="submit"
          variant="primary"
          className="form-page-submit-button mt-3"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FormPage;
