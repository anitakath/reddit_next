import Link from 'next/link';

//STYLES
import styles from '../../../styles/Main/Feed.module.css'

//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
//import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";


//REDUX
import { useSelector } from 'react-redux';


const CreatePost = () => {


  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)




  return (
    <div className={styles.createPost_container}>
      <div className={styles.userImage_container}>
        <div className={styles.circle}>
          {isLoggedIn ? (
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
          ) : (
            <FontAwesomeIcon icon={faQuestion} className={styles.icon} />
          )}
        </div>
      </div>

      <div className={styles.form_container}>
        <form className={styles.createPost_form}>
          <div className={styles.createPost_linkDiv}>
            <Link href={`/new-post`} className={styles.createPost_link}>
               create a new post
            </Link>
          </div>
          <button className={styles.photo_btn}>
            <FontAwesomeIcon icon={faImage} className={styles.icon} />
          </button>
          <button className={styles.link_btn}>
            <FontAwesomeIcon icon={faLink} className={styles.icon} />
          </button>
         
          <button className={styles.createPost_btn} type="submit">
            <FontAwesomeIcon icon={faPlus} className={styles.icon} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
