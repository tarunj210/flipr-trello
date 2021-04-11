import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function (props) {
    const { closeModalTask, taskTitle, taskDescription, taskDueDate, deleteTask, editTask} = props;

    return (
        <div style={{textIndent: '50px'}}> 
            <h1>{taskTitle}</h1>
            <h4>DESCRIPTION</h4>
            <h6 style={{color: '#89609E'}}>{taskDescription}</h6>
            <h4>DUE DATE</h4>
            <h6 style={{color: '#89609E'}}>{taskDueDate}</h6>
            <h4>ATTACHMENTS</h4>


            <button onClick={editTask} className="btn btn-primary">Edit</button>
            <button onClick={closeModalTask} className="btn btn-link">Cancel</button>
            <button onClick={deleteTask} className="btn btn-danger btn-sm">Delete</button>
        </div>
    )
}