import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faDollarSign, faUser, faVoteYea } from '@fortawesome/free-solid-svg-icons';

const Read = () => {
    const [users, setUsers] = useContext(UserContext);
    const {id} = useParams();

    const user = users.find(user => user.id === id);

    return (
        <div className="container">
            <div>
            <h3 style={{backgroundColor: 'yellow', padding: '10px 20px', margin: '10px',borderRadius: '10px', border:'1px solid black', width: '100%', textAlign: 'center'}}>Read Information</h3>
            </div>
            <div  className="d-flex justify-content-center">
            <div style={{textAlign: 'center', position: 'relative', top: '30px', backgroundColor: 'orange', padding:'20px 50px', borderRadius: '10px', border:'1px solid black'}}>
            <h5><FontAwesomeIcon icon={faUser} /> Name: {user.name}</h5>
            <h6><FontAwesomeIcon icon={faVoteYea} /> Position: {user.position}</h6>
            <h6><FontAwesomeIcon icon={faDollarSign} /> Salary: {user.salary}</h6>
            <Link to='/'>
                <button className="btn btn-primary"><FontAwesomeIcon icon={faArrowCircleLeft} /> Go Back</button>
            </Link>
            </div>
            </div>
        </div>
    );
};

export default Read;