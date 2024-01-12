
//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faTrash} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";


//STYLES
import styles from '../../../styles/Main/Feed.module.css'

const postInteraction = () =>{


  const deletePostHandler = (e) =>{
    e.preventDefault();
    console.log('delete post')
  }

    return (
      <div className={styles.postInteraction_container}>
        <div className={styles.postInteraction_div}>
          <button className={styles.like_btn}>
            <FontAwesomeIcon
              icon={faHeart}
              className={styles.postInteraction_icon}
            />
            <p> like </p>
          </button>
        </div>

        <div className={styles.postInteraction_div}>
          <button className={styles.share_btn}>
            <FontAwesomeIcon
              icon={faShare}
              className={styles.postInteraction_icon}
            />
            <p> share </p>
          </button>
        </div>

        <div className={styles.postInteraction_div}>
          <button className={styles.comment_btn}>
            <FontAwesomeIcon
              icon={faComment}
              className={styles.postInteraction_icon}
            />
            <p> comment </p>
          </button>
        </div>

        <div className={styles.postInteraction_div}>
          <button className={styles.comment_btn}>
            <FontAwesomeIcon
              icon={faTrash}
              className={styles.postInteraction_icon}
              onClick={deletePostHandler}
            />
            <p> delete </p>
          </button>
        </div>
      </div>
    );
}

export default postInteraction