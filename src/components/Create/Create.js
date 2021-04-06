import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Create.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';

const Create = () => {
    const [users, setUsers] = useContext(UserContext);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');

    const updateId = e =>{
        setId(e.target.value);
        console.log(id);
    }

    const updateName = e =>{
        setName(e.target.value);
    }

    const updatePosition = e =>{
        setPosition(e.target.value);
    }

    const updateSalary = e =>{
        setSalary(e.target.value);
    }

    const addUser = e =>{
        e.preventDefault();
        const newUser = [...users, {
            id,
            name,
            position,
            salary
        }]
        setUsers(newUser);
    }
    return (
        <div className="container">
            <h3 style={{backgroundColor: 'yellow', padding: '10px 20px', margin: '10px',borderRadius: '10px', border:'1px solid black', textAlign: 'center'}}>Create User</h3>
            
            <div className="container customForm d-flex justify-content-center">
                <Form onSubmit={addUser} style={{width:'400px'}}>
                    <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="text"
                        name="id"
                        value={id}
                        onChange={updateId}
                        placeholder="Enter ID"
                    />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={updateName}
                        placeholder="Enter Name"
                    />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                        type="text"
                        name="position"
                        value={position}
                        onChange={updatePosition}
                        placeholder="Enter Position"
                    />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                        type="text"
                        name="salary"
                        value={salary}
                        onChange={updateSalary}
                        placeholder="Enter Salary"
                    />
                    </Form.Group>
                    <Button className="actionButton" variant="primary" type="submit"><FontAwesomeIcon icon={faSave} /> Submit
                    </Button>
                    <Link to="/">
                    <Button className="actionButton" variant="info">
                    <FontAwesomeIcon icon={faArrowCircleLeft} /> Back to Home
                    </Button>
                    </Link>
                </Form>
            </div>
            
        </div>
    );
};

export default Create;