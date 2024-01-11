
import { useState, useEffect } from "react";

//COMPONENTS
import CreatePost from "./CreatePost";
import Post from "./Post";
import Filter from './Filter'

//STYLES
import styles from '../../../styles/Main/Feed.module.css'

const Feed = (props) => {

   const loadedPosts = props.posts;

  const [loadingPosts, setLoadingPosts] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [posts, setPosts] = useState([])
  

  useEffect(()=>{

      if (loadedPosts) {
        setIsLoaded(true);
        setPosts(loadedPosts)
        setLoadingPosts(false)
      }
     
   
  }, [props.posts]) 
  console.log(posts)



  return (
    <div className={styles.container}>
      <Filter />
      <CreatePost />
      {loadingPosts && <p className={styles.loadingPostsParagraph}> loading posts ...</p>}
      {isLoaded && posts.map((post, id) => <Post {...post} key={id} />)}
    </div>
  );
};

export default Feed;
