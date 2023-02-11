import React,{useRef,useEffect,useState} from "react";
import style from "./Register.module.css";
import { Link } from "react-router-dom";

// import { HiOutlineMailOpen } from "react-icons/hi";
export default function Register() {
const name=useRef('');
const email=useRef('');
const password=useRef('');

const [Name,setName]=useState('');
const [Mail,setMail]=useState('');
const [Pass,setPass]=useState('');
const [Registration,setRegistration]=useState(false)
useEffect(()=>{
 let data=JSON.parse(localStorage.getItem('users'));
 if(!data){
localStorage.setItem("users",JSON.stringify([]))
 }
  
},[])
function handleSubmit(event){
  event.preventDefault();
  let NewData = {
    name: name.current.value,
    email: email.current.value,
    password: password.current.value,
  };
 let data = JSON.parse(localStorage.getItem("users"));
 let Find =data.find((el)=>{
  return el.name===NewData.name||el.email===NewData.email;
 })
 if(Find){
  return alert("This user is already present")
 }
  setRegistration(false);
  let emailRegex = new RegExp("[a-z0-9]+@[a-z]+[.]{1}[a-z]{2,3}");
  let passRegex = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );
  let nameRegex = new RegExp("(?=.*[A-Za-z0-9])(?=.{3,})");
  emailRegex.test(NewData.email) ? setMail(true) : setMail("Enter valid Email");
  nameRegex.test(NewData.name) ? setName(true) : setName("Atleast 3 character");
  passRegex.test(NewData.password)
    ? setPass(true)
    : setPass("enter valid pass");
  if(Name===true&&Mail===true&&Pass===true){
  
  localStorage.setItem('users',JSON.stringify([...data,NewData]))
  name.current.value=""
  email.current.value=""
  password.current.value=""
  setRegistration(true);
  }
}
  return (
    <div className={style.mainContaine}>
      {Registration ? (
        <div className={style.Registration}>
          <h1>Thanks</h1>
          <p>You have successfully Registered</p>
          <p>Redirecting to Login Page ....</p>
        </div>
      ) : (
        ""
      )}
      {Registration?setTimeout(() => {
        setRegistration(false);
        window.location.href="/login";
      }, 5000):""}
      <div className={style.subContainer}>
        <div className={style.imageContainer}>
          <img
            src="https://i1.wp.com/godofindia.com/wp-content/uploads/2017/05/virat-kohli-4.jpg"
            alt=""
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="email">
            <input
              type="email"
              placeholder="Enter your Email"
              ref={email}
              required
            />
            <p>{Mail}</p>
          </div>
          <div className="username">
            <input
              type="text"
              placeholder="Enter UserName"
              ref={name}
              required
            />
            <p>{Name}</p>
          </div>
          <div className="passWord">
            <input
              type="password"
              placeholder="Enter Password"
              ref={password}
              required
            />
            <p>{Pass}</p>
          </div>

          <div className={style.buttons}>
            <div className={style.leftContainer}>
              <p>Have Account?</p>
              <h3>
                <Link to="/login">Login</Link>
              </h3>
            </div>
            <div className={style.rightContainer}>
              <input type="submit" value="Register" onSubmit={handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
