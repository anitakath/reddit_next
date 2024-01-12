import { useState, useEffect } from "react";


//COMPONENTS
import Feed from "./Feed/Feed";
import WebUser from "./WebUser";
import Login from "../Login";

//STYLES
import styles from '../../styles/Main/Main.module.css'

//REDUX
import { useSelector } from 'react-redux'


const Main = (props) => {
  

  const currentFilter = useSelector((state) => state.filter);

  console.log(currentFilter)

  const isLoggedIn = useSelector((state) => state.auth)

  console.log(isLoggedIn.isLoggedIn)


 

  return (
    <div className={styles.container}>
      {!isLoggedIn.isLoggedIn && <Login/>}

      {isLoggedIn.isLoggedIn && (
        <div>
          <div className={styles.output_field}>
            <Feed posts={props.posts} />
          </div>

          <div className={styles.webUser_container}>
            <div className={styles.webUser_fixed}>
              <WebUser />
            </div>
          </div>
        </div>
      )}
    </div>
  );

};

export default Main; 