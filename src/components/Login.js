import React from 'react';

const Login = (props) => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError, forgotPassword } = props;


    return (
        <section className="login">

            <div className="loginContainer">
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <React.Fragment>
                            <button className="signInButton" onClick={handleLogin}>Sign In</button>
                            <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span><button className="resetButton" onClick={() => forgotPassword(email)}>Reset password</button></p>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <button className="signUpButton" onClick={handleSignup}>Sign Up</button>
                            <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </React.Fragment>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Login;
