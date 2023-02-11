import React from "react";
import Box from "../components/Box";
import style from "./home.module.css";

export default function About() {
    let arr=[{
        heading:"HTML CSS",
        info:"I have knowledge of html and css"
    },
{
        heading:"javascript",
        info:"I have knowledge javascript"
    },
{
        heading:"React",
        info:"I have knowledge React"
    }]
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.rightContainer}>
          <h1 className={style.about}>About Us</h1>
          <img
            src="https://media.licdn.com/dms/image/D5603AQH9NE61SAfYqw/profile-displayphoto-shrink_800_800/0/1672949383586?e=1678320000&v=beta&t=PPHxvmKVkL1NUhK1cb-B0abRtAJhnjXVKbhxfqy4z6E"
            alt=""
          />
          <div className={style.personalInfo}>
            <p>age:23</p>
            <p>location:India</p>
          </div>
        </div>
        <div className={style.leftContainer}>
          <div className={style.info}>
            <h3>Sameer Yengade</h3>
            <p>
            .....My name is sameer yengade I am belongs to wardha maharashtra i have completed B.sc computer science in 2022 Nagpur university.Only because of Function UP I am able to do the project and i am very excited staring a my first project we feel excitement and enthusiasm and everything is perfect.</p><p>my long term gole is during satisfies work and achieve good position in IT field.
            </p>
          </div>
          <div className={style.components}>
            {arr.map((el) => {
              return <Box heading={el.heading} information={el.info} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}