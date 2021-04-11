import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import { MdClose } from 'react-icons/md';
const Background = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalWrapper = styled.div`
	width: 800px;
	height: 500px;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
	z-index: 10;
	border-radius: 10px;
    display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.8;
	color: #141414;
	button {
		padding: 10px 24px;
		background: #141414;
		color: #fff;
		border: none;
	}
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const styles = {
	inputContainer: {
		marginBottom: '15px',
		display: 'table-cell',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%'

	}
}

export const TeamModal = ({ showModal, setShowModal, handleChange }) => {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === 'Escape' && showModal) {
				setShowModal(false);
			}
		},
		[setShowModal, showModal]
	);

	useEffect(
		() => {
			document.addEventListener('keydown', keyPress);
			return () => document.removeEventListener('keydown', keyPress);
		},
		[keyPress]
	);



	return (
		<React.Fragment>
			{showModal ? (
				<Background onClick={closeModal} ref={modalRef}>
					<ModalWrapper showModal={showModal}>

						<ModalContent>
							<form>
								<h1 className="formtext" style={{ marginBottom: '20px' }} >ADD TEAM</h1>
								<h4 >TEAM NAME</h4>
								<input type="text" placeholder="Enter Team Name" required style={styles.inputContainer} onChange={handleChange} />
								<h4 >DESCRIPTION</h4>
								<textarea name="details" rows="2" cols="30" style={styles.inputContainer}></textarea>
								<h4 >TEAM PHONE NUMBER</h4>
								<input type="text" placeholder="Enter Team Phone Number" required style={styles.inputContainer} />
								<div>
									<button onClick={() => setShowModal((prev) => !prev)} >Submit</button>
								</div>
							</form>
						</ModalContent>
						<CloseModalButton aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)} />
					</ModalWrapper>

				</Background>
			) : null
			}
		</React.Fragment >
	);
};
