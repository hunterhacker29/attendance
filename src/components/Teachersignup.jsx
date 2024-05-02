import React from 'react';
import { Link } from 'react-router-dom';

function Teachersignup() {
  return (
    <>
      <header id="header">
        <div className="logo"><a href="">Attendance portal</a></div>
        <div className="hamburger" id="toggle">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className="nav-bar" id="navbar">
          <ul>
            <li>
              <Link to ="/home">Home</Link>
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
                <label htmlFor="email">Enter name</label>
                <input type="email" name="" id="" placeholder="example@email.com" />
              </div>
              <div className="form-item">
                <label htmlFor="email">Enter rollnor </label>
                <input type="email" name="" id="" placeholder="example@email.com" />
              </div>
              <div className="form-item">
                <label htmlFor="email">Enter Email</label>
                <input type="email" name="" id="" placeholder="example@email.com" />
              </div>
              <div className="form-item">
                <label htmlFor="password">Enter Password</label>
                <input type="password" name="" id="password" placeholder="Enter your Password" required className="pass-key" />
                {/* <img src="eye-close.png" id="eyeicon" className="password-toggle" alt="Eye Icon" /> */}
              </div>
              <div className="form-item">
                <label htmlFor="email">Confirm Password</label>
                <input type="password" name="" id="" placeholder="Confirm your Password" />
              </div>
              <button type="submit">Signup</button>
            </div>
          </form>
          <div className="login-footer">
            <a href="#">
              <img width="30" src="https://img.icons8.com/color/512/facebook-new.png" alt="facebook" />Facebook
            </a>
            <a href="#">
              <img width="30" src="https://img.icons8.com/fluency/512/google-logo.png" alt="google" />Google
            </a>
          </div>
        </div>
        <div className="login-right">
                    <img src="https://i.pinimg.com/736x/1e/4d/97/1e4d97d1602bfe354e00400bef35549c.jpg" alt="Data Arranging" /> {/* Make sure the image path is correct */}
        </div>
      </div>
      <script>
        {`
          let eyeicon = document.getElementById("eyeicon");
          let password = document.getElementById("password");

          eyeicon.onclick = function() {
            if (password.type === "password"){
              password.type = "text"; 
              eyeicon.src = "eye-open.png";
            } else {
              password.type = "password";
              eyeicon.src = "eye-close.png";
            }
          }
        `}
      </script>
      <script src="javascript/index.js"></script>
    </>
  );
}

export default Teachersignup;
