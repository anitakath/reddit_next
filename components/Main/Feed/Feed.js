//COMPONENTS
import CreatePost from "./CreatePost";
import Post from "./Post";
import Filter from './Filter'

//STYLES
import styles from '../../../styles/Main/Feed.module.css'

const Feed = () => {
  return (
    <div className={styles.container}>
      <Filter />
      <CreatePost />

      <Post />
    </div>
  );
};

export default Feed;
