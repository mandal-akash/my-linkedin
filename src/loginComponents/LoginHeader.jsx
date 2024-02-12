import React from "react";
import "../style/loginheader.css";
const LoginHeader = () => {
  return (
    <div className="login-header">
      <img
        src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
        alt=""
      />
      <div className="headerOptions">
        <div className="headerIcons">
          <span>
            <i class="fa-solid fa-newspaper"></i>
          </span>
          <p>Articles</p>
        </div>

        <div className="headerIcons">
          <span>
            <i class="fa-solid fa-user-group"></i>
          </span>
          <p>People</p>
        </div>

        <div className="headerIcons">
          <span>
            <i class="fa-solid fa-folder"></i>
          </span>
          <p>Learning</p>
        </div>

        <div className="headerIcons">
          <span>
            <i class="fa-solid fa-briefcase"></i>
          </span>
          <p>Jobs</p>
        </div>

        <div className="headerIcons">
          <span>
            <i class="fa-solid fa-chalkboard"></i>
          </span>
          <p>Get the app</p>
        </div>
        <div className="linkedinBtns">
        <button className="joinBtn">Join now</button>
        <button className='linkedin-signBtn'>Sign in</button>
      </div>
      </div>
    
    </div>
  );
};

export default LoginHeader;
