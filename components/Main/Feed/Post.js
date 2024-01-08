//STYLES
import styles from '../../../styles/Main/Feed.module.css'

//COMPONENTS
import PostRating from "./PostRating";

const Post = () => {
  return (
    <div className={styles.post_container}>
      <div className={styles.postRating_container}>
        <PostRating />
      </div>

      <div className={styles.postField}>
        <div className={styles.postInfo}> post info</div>
        <div className={styles.postItself}>
          <p>
            Hallo du süße Maus, ich mag dich, ich liebe dich, du bist toll. Hab
            ganz viel Spaß, bei was auch immer du gerade machst. und mach es mit
            Leidenschaft.
          </p>
        </div>
        <div className={styles.postInteraction}> post interaction</div>
      </div>
    </div>
  );
};

export default Post;
