import React, { useEffect, useRef, useState } from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";

function Login() {
  const [LocalData, setLocalData] = useState("");
  const [found, setFound] = useState(false);
  const userName = useRef("");
  const password = useRef("");
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("users"));
    setLocalData(data);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    let userNameInput = userName.current.value;
    let userpassword = password.current.value;

    let filteredData = LocalData.filter((el) => {
      return el.name === userNameInput && el.password === userpassword;
    });
    if (filteredData.length>0) {
      console.log(filteredData)
      setFound(true);
    } else {
      alert("userNot found please enter valid credintial");
    }
  }
  return (
    <div className={style.mainContaine}>
      {found ? (
        <div className={style.LoginNotify}>
          <h1>Successfully Login</h1>
        </div>
      ) : (
        ""
      )}
      {setTimeout(() => {
        setFound(false);
      }, 5000)}
      <div className={style.subContainer}>
        <div className={style.imageContainer}>
          <img
            src="https://i1.wp.com/godofindia.com/wp-content/uploads/2017/05/virat-kohli-4.jpg"
            alt=""
          />
          {/* <h1>Login</h1> */}
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter UserName" ref={userName} />
          <input type="password" placeholder="Enter Password" ref={password} />

          <div className={style.buttons}>
            <div className={style.leftContainer}>
              <p>Create Account?</p>
              <h3>
                <Link to="/register">Sign up</Link>
              </h3>
            </div>
            <div className={style.rightContainer}>
              <input type="submit" value="Login" onSubmit={handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
