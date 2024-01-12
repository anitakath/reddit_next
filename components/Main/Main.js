import { useState, useEffect } from "react";


//COMPONENTS
import Feed from "./Feed/Feed";
import WebUser from "./WebUser";

//STYLES
import styles from '../../styles/Main/Main.module.css'

//REDUX
import { useSelector } from 'react-redux'


const Main = (props) => {
  const [posts, setPosts] = useState([]);

  const currentFilter = useSelector((state) => state.filter);

  console.log(currentFilter)

  const isLoggedIn = useSelector((state) => state.auth)

  console.log(isLoggedIn.isLoggedIn)


 

  return (
    <div className={styles.container}>
      <div className={styles.output_field}>
        <Feed posts={props.posts} />
      </div>

      <div className={styles.webUser_container}>
        <div className={styles.webUser_fixed}>
            <WebUser/>

        </div>
      </div>
    </div>
  );
};

export default Main; 