import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for React Router navigation
import '../components/css/style.css'; // Import CSS file

function Teacherlogin() {
    return (
        <div>
            <header id="header">
                <div className="logo"><a href="/">Attendance portal</a></div> {/* Use / for the root URL */}
                <div className="hamburger" id="toggle">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <nav className="nav-bar" id="navbar">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link> {/* Use / for the root URL */}
                        </li>
                      
                      
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <div className="login" id="login">
                        <li>
                          <Link to ="/" className="navlogin">Student Login</Link>
                        </li>
                        </div>
                      
                        <div className="login" id="login">
                        
                        <li>
                          <Link to ="/teacherlogin" className="navlogin">Teacher Login</Link>
                        </li>
                        </div>
                    </ul>
                </nav>
            </header>
            <div className="container" id="home">
                <div className="login-left">
                 
                    <form action="" className="login-form" autoComplete="off">
                        <div className="login-content">
                            <div className="form-item">
                                <label htmlFor="email">Enter Email</label>
                                <input type="email" name="email" id="email" placeholder="example@email.com" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="password">Enter Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter your Password" required className="pass-key" />
                                {/* <img src="../components/images/eye-close.png" id="eyeicon" className="password-toggle" alt="Eye Icon" /> */}
                            </div>
                            <div className="form-item">
                                <div className="checkbox">
                                    <input type="checkbox" name="rememberMeCheckbox" id="rememberMeCheckbox" defaultChecked />
                                    <label htmlFor="rememberMeCheckbox" className="checkboxlabel">Remember Me</label>
                                </div>
                            </div>
                            <div className="remember-forgot">
                                <a href="#">Forgot password?</a>
                            </div>
                            <div className="bg-grey">
                                <div className="sing-up">Don't have an account? <Link to="/teachersignup" className="text-link" id="sign-up">Sign up</Link></div>
                            </div>
                            <button type="submit">Log In</button> {/* Changed "LogIn" to "Log In" for consistency */}
                        </div>
                        <div className="login-footer">
                            <a href="#">
                                <img width="30" src="https://img.icons8.com/color/512/facebook-new.png" alt="facebook" />Facebook
                            </a>
                            <a href="#">
                                <img width="30" src="https://img.icons8.com/fluency/512/google-logo.png" alt="google" />Google
                            </a>
                        </div>
                    </form>
                </div>
                <div className="login-right">
                    <img src="https://i.pinimg.com/736x/1e/4d/97/1e4d97d1602bfe354e00400bef35549c.jpg" alt="Data Arranging" /> {/* Make sure the image path is correct */}
                </div>
            </div>
            {/* Moved scripts to external files */}
            {/* <script>
                {`
                    let eyeicon = document.getElementById("eyeicon");
                    let password = document.getElementById("password");

                    eyeicon.onclick = function() {
                        if (password.type === "password"){
                            password.type = "text"; 
                            eyeicon.src = "eye-open.png";
                        }else{
                            password.type = "password";
                            eyeicon.src = "eye-close.png";
                        }
                    }
                `}
            </script>
            <script src="javascript/index.js"></script> */}
        </div>
    );
}

export default Teacherlogin;
