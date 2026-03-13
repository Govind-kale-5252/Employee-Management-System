import './Dashboard.css'
import { useEffect, useState } from "react";
import { Button, Container, Table, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () =>{
    
    const [ employees, setEmployees ] = useState([]);

    const navigate = useNavigate();

    useEffect( () =>{
        const fetchEmployees = async () =>{
            try{
                const response = await fetch("http://localhost:8080/api/employees");
                const data = await response.json();

                setEmployees(data);
            } catch(error){
                console.error("Error fetching employee:", error.message);
            }
        }

        fetchEmployees();

    }, []);
    
    const handleDelete = async (employeeId) =>{
        try {
            const response = await fetch(`http://localhost:8080/api/employee/${employeeId}`,{
                method: "DELETE",
            });

            if(response.ok){
                setEmployees((prevEmployees) =>
                prevEmployees.filter((employee)=> employee.id !== employeeId)
                )
            }

            console.log(`Employee with ID ${employeeId} deleted successfully`);
        } catch (error) {
            console.error("Error deleting employee:", error.message);
        }
    }

    const handleUpdate = (employeeId) =>{
        navigate(`/employee/${employeeId}`);
    }


    return (
         <div className="dashboard-container">
             <h1>Employees</h1>
             <div className="table-container">
                 <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={employee.id}>
                                <td className="serial-number">{index + 1}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.department}</td>
                                <td>
                                    <Button variant="outline-secondary" onClick={()=> handleUpdate(employee.id)}>Update</Button>{" "}
                                    <Button variant="outline-danger" onClick={()=> handleDelete(employee.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                 </Table>
             </div>
         </div>
    )
}

export default Dashboard;