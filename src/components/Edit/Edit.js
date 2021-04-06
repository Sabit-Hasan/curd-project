import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Edit = () => {

    const [users, setUsers] = useContext(UserContext);
    const {id} = useParams();
    const user = users.find(user => user.id === id);

    const [name, setName] = useState(user.name);
    const [position, setPosition] = useState(user.position);
    const [salary, setSalary] = useState(user.salary);

    const editName = (e) => {
        setName(e.target.value);
        const editedName = name;
        user.name = editedName;
      };
    
      const editPosition = (e) => {
        setPosition(e.target.value);
        const editedPosition = position;
        user.position = editedPosition;
      };
    
      const editSalary = (e) => {
        setSalary(e.target.value);
        const editedSalary = salary;
        user.salary = editedSalary;
      };
    
      const editUser = (e) => {
        e.preventDefault();
        setUsers([...users]);
      };

    return (
        <div className="container">
            <h3 style={{backgroundColor: 'yellow', padding: '10px 20px', margin: '10px',borderRadius: '10px', border:'1px solid black', textAlign: 'center'}}>Edit User</h3>
            
            <div className="container customForm d-flex justify-content-center">
            <Form>
                <Form.Group>
                <Form.Label>
                    <h1>ID NO: {user.id}</h1>
                </Form.Label>
                </Form.Group>
                <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    onChange={editName}
                    placeholder={user.name}
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Position</Form.Label>
                <Form.Control
                    type="text"
                    name="position"
                    onChange={editPosition}
                    placeholder={user.position}
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Salary</Form.Label>
                <Form.Control
                    type="text"
                    name="salary"
                    onChange={editSalary}
                    placeholder={user.salary}
                />
                </Form.Group>

                <Link to="/">
                <Button className='actionButton' onSubmit={()=>editUser} variant="primary" type="submit">
                    Edit User
                </Button>
                <Button className="actionButton" variant="info">
                    Back to Home
                </Button>
                </Link>
        </Form>
        </div>
        </div>
    );
};

export default Edit;