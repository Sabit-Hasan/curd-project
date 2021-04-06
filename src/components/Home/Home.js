import './Home.css';
import { Button, Table } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faUserEdit, faUserPlus, faUserTimes } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [users, setUsers] = useContext(UserContext);

    return (
        <div>
            <div className="container">
            <h3 style={{backgroundColor: 'yellow', padding: '10px 20px', margin: '10px',borderRadius: '10px', border:'1px solid black', textAlign: 'center'}}>Database Section</h3>
                <Link to="/create">
                    <Button variant="primary mt-5"><FontAwesomeIcon icon={faUserPlus} /> Create</Button>
                </Link>

                <Table className="mt-5" striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.position}</td>
                                    <td>{user.salary}</td>
                                    <td>
                                        <Link to={`/read/${user.id}`}><Button className="actionButton" variant="success"> <FontAwesomeIcon icon={faFileAlt} /> Read</Button></Link>
                                        <Link to={`/edit/${user.id}`}>
                                        <Button className="actionButton" variant="info"><FontAwesomeIcon icon={faUserEdit} /> Edit</Button>
                                        </Link>
                                        <Link to={`/delete/${user.id}`}>
                                            <Button className="actionButton" variant="danger"><FontAwesomeIcon icon={faUserTimes} />  Delete</Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Home;