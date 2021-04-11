import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import ModalTask from './ModalTask'
import Login from './Login';

export default class extends Component {
    state = {
        isTaskClicked: false,
        isModalTaskOpen: false,
        isModalSignInOpen: false,
    }

    handleClick = () => {
        if (this.props.user) {
            this.setState({
                isModalTaskOpen: true,
            })
        } else {
            this.setState({
                isModalSignInOpen: true,
            })
        }

        this.setState({
            isTaskClicked: true,
        })
    }

    handleCancel = () => {
        this.setState({
            isTaskClicked: false,
            isModalSignInOpen: false,
            isModalTaskOpen: false,
        })
    }

    render() {
        const { taskID, groupID, taskTitle, onClickTask, user } = this.props;
        const { isTaskClicked } = this.state;
        const selectModal = (() => {
            if (user && isTaskClicked) {
                return <ModalTask
                    {...this.props}
                    closeModalTask={this.handleCancel}
                />
            } else if (!user && isTaskClicked) {
                return <Login
                    {...this.props}
                    handleLogout={(user) => this.props.flowUser(user)}
                />
            }
        })()

        return (
            <div onClick={onClickTask.bind(this, taskID, groupID)} className="tasks__item" id={taskID}>
                <div onClick={this.handleClick}>{taskTitle}</div>

                {selectModal}

            </div>
        )
    }
}