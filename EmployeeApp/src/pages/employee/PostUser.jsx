import { useState } from "react"
import "./PostUser.css"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const PostUser = () => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        try {
            const response = await fetch('http://localhost:8080/api/employee', {
                method : "POST",
                headers : { "Content-Type": "application/json" },
                body : JSON.stringify(formData)
            });

            const data = await response.json();
            console.log("Employee created: ", data)
            navigate("/")

        } catch (error) {
            console.log("Error creating employee: ", error.message)
        }
    }

    return (
        <>
            <div className="center-form">
                <h1>New Employee</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName" className="mb-3">
                        <Form.Control 
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Control 
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone" className="mb-3">
                        <Form.Control 
                            type="text"
                            name="phone"
                            placeholder="Enter Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicDepartment" className="mb-3">
                        <Form.Control 
                            type="text"
                            name="department"
                            placeholder="Enter Department"
                            value={formData.department}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Button variant="success" type="submit" className="w-100 mt-3">
                        Add Employee
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default PostUser