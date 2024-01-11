//STYLES
import styles from '../../../styles/Main/Feed.module.css'

//COMPONENTS
import PostRating from "./PostRating";
import PostInteraction from './PostInteraction';

const Post = (props) => {

  console.log(props)

  const {id, author, title, description, upvotes, downvotes} = props
  console.log(author)

  console.log(upvotes)
  console.log(downvotes)

  let totalvote = upvotes - downvotes

  console.log(totalvote)

  
  
  return (
    <div className={styles.post_container}>
      <div className={styles.postRating_container}>
        <PostRating votes={totalvote} postId={id} />
      </div>

      <div className={styles.postField}>
        <div className={styles.postInfo}> created by: {author} </div>
        <div className={styles.postItself}>
          <h1>{title}</h1>
          <p>
            {description}
          </p>
        </div>
        <div className={styles.postInteraction}> 
        <PostInteraction/> 
        </div>
      </div>
    </div>
  );
};

export default Post;
