import { useState, useEffect } from "react";


//COMPONENTS
import Feed from "./Feed/Feed";
import WebUser from "./WebUser";
import Login from "../Start";

//STYLES
import styles from '../../styles/Main/Main.module.css'

//REDUX
import { useSelector, useDispatch } from 'react-redux'


const Main = (props) => {
  const [posts, setPosts] = useState([]);

  const currentFilter = useSelector((state) => state.filter);

  console.log(currentFilter)

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)


  console.log(isLoggedIn)




 

  return (
    <div className={styles.container}>
      {!isLoggedIn && <Login />}

      {isLoggedIn && (
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