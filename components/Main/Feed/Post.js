//STYLES
import styles from '../../../styles/Main/Feed.module.css'

//COMPONENTS
import PostRating from "./PostRating";
import PostInteraction from './PostInteraction';

const Post = (props) => {



  const {id, created_at, author, title, description, upvotes, downvotes} = props
  
  let totalvote = upvotes - downvotes

  
  
  return (
    <div className={styles.post_container}>
      <div className={styles.postRating_container}>
        <PostRating votes={totalvote} postId={id} />
      </div>

      <div className={styles.postField}>
        <div className={styles.postInfo}>
          <p>created by: {author}</p>
          <p className={styles.postInfo_at}> at: {created_at}</p>
        </div>
        <div className={styles.postItself}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={styles.postInteraction}>
          <PostInteraction postId={id} />
        </div>
      </div>
    </div>
  );
};

export default Post;
