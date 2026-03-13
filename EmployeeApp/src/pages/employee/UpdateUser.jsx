import './UpdateUser.css'
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const UpdateUser = () =>{

    const {id} = useParams();
    const navigate = useNavigate();

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

        useEffect(() =>{
            const fetchEmployee = async () =>{
                try {
                    const response = await fetch(`http://localhost:8080/api/employee/${id}`);
                    const data = await response.json();
                    setFormData(data);
                } catch (error) {
                    console.error("Error fetching user: ", error.message);
                }
            }

            fetchEmployee();

        }, [id])

        const handleSubmit = async (e) =>{
            e.preventDefault();

            try{
                const response = await fetch(`http://localhost:8080/api/employee/${id}`,{
                    method: 'PUT',
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();
                console.log("USer updated: ", data);

                navigate(`/`)
            } catch (error) {
                console.error("Error updating user:", error.message);
            }
        }
    

    return (
            <>
            <div className="center-form">
                <h1>Edit Employee</h1>
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

                    <Button variant="primary" type="submit" className="w-100 mt-3">
                        Edit Employee
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default UpdateUser;