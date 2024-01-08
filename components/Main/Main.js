import { useState, useEffect } from "react";


//COMPONENTS
import Feed from "./Feed/Feed";
import WebUser from "./WebUser";

//STYLES
import styles from '../../styles/Main/Main.module.css'

//REDUX
import { useSelector } from 'react-redux'

const Main = () => {
  const [posts, setPosts] = useState([]);

  const currentFilter = useSelector((state) => state.filter);

  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.reddit.com/r/all/hot.json", {
          headers: {
            Authorization: "Bearer DVRz32O6REDwuxl07s_SQQ",
          },
        });
        setPosts(response.formData.data.children);
      } catch (error) {
        console.error("Error fetching dataaaa");
      }
    };

    fetchData();
  }, []);
  */

  console.log(posts);

  return (
    <div className={styles.container}>
      <div className={styles.output_field}>
        <Feed />
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