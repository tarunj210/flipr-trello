import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { TeamModal } from './TeamModal';
const Button = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #e9e9e9;
    color: black;
    font-size: 24px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
`
const styles = {
    buttonContainer: {
        border: 'none',
        outline: 'none',
        background: '#e9e9e9',
        color: 'black',
        fontSize: '24px',
        fontWeight: '400'
    }
}
export default function (props) {
    const [showModal, setShowModal] = useState(false);
    const [teamValue, setTeamValue] = useState('');
    const [isTeam, setTeam] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    }
    const handleChange = (e) => {

        setTeamValue(e.target.value);
        setTeam(true);

    }
    const HandleTeam = () => {
        if (isTeam) {
            var newTeam = teamValue;
        } else {
            newTeam = 'ADD TEAM';
        }
        return newTeam;
    }
    return (
        <header className="main__header container-fluid clearfix">
            <h2 className="logo" style={{ marginTop: '10px' }}>Trello</h2>
            <Button onClick={openModal}><HandleTeam /></Button>
            <TeamModal showModal={showModal} setShowModal={setShowModal} handleChange={handleChange} />


            <div className="info float-right">
                <div className="user">{props.user}
                </div>
                <button style={styles.buttonContainer} onClick={props.handleLogout} className="btn btn-primary">Signout
                </button>
            </div>
        </header>

    )
}