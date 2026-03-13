import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import './Home.css'

const Home = () => {
  return (
    <Container className="home-container">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4">Welcome to Employee Management System</h1>
          <p className="lead">Streamline your employee management process</p>
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col md={5} className="mb-4">
          <Card className="home-card">
            <Card.Body className="text-center">
              <Card.Title>View Employees</Card.Title>
              <Card.Text>
                Browse through all employees in your organization
              </Card.Text>
              <Button as={Link} to="/dashboard" variant="primary" size="lg">
                Go to Dashboard
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={5} className="mb-4">
          <Card className="home-card">
            <Card.Body className="text-center">
              <Card.Title>Add New Employee</Card.Title>
              <Card.Text>
                Add new employees to your organization
              </Card.Text>
              <Button as={Link} to="/employee" variant="success" size="lg">
                Add Employee
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home