import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Delete.css';

const Delete = () => {

    const [users, setUsers] = useContext(UserContext);
    
    const {id} = useParams();

    const handleDelete = id =>{
        const user = users.filter(user => user.id !== id);
        setUsers(user);
    }

    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Are You Sure?</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Do you want to delete?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Link to="/">
                        <Button className="actionButton" variant="info">Cancel</Button>
                        <Button onClick={()=> handleDelete(id)} className="actionButton" variant="danger">Delete</Button>
                    </Link>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default Delete;