import Link from 'next/link';
import Image from 'next/image';


import { useContext, useState } from 'react';


//CONTEXT
import { RedditContext } from "@/context/RedditContext";


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
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const { currentUser } = useContext(RedditContext);
  console.log(currentUser);

  // const [showImage, setShowImage] = useState(false);

  let avatarUrl;

  if (currentUser) {
    console.log("HI");
    //avatarUrl = '"' + (currentUser.user?.user_metadata?.avatar_url || '') + '"';
    avatarUrl = currentUser.user?.user_metadata?.avatar_url; // Zugriff auf das Profilfoto

    console.log(avatarUrl);
  }

  const [showImage, setShowImage] = useState(!!avatarUrl);

  console.log(showImage);

  //const avatarUrl = currentUser.user?.user_metadata?.avatar_url; // Zugriff auf das Profilfoto
  //console.log(avatarUrl);

  /* {showImage && avatarUrl &&  <Image src={avatarUrl} width={200} height={200}></Image>}
   */

  return (
    <div className={styles.createPost_container}>
      <div className={styles.userImage_container}>
        <div className={styles.circle}>
          {isLoggedIn ? (
            <Image
              src={avatarUrl}
              width={80}
              height={200}
              className={styles.users_image}
            ></Image>
          ) : (
            <FontAwesomeIcon icon={faQuestion} className={styles.icon} />
          )}
        </div>
      </div>

      <div className={styles.form_container}>
        <div className={styles.createPost_linkDiv}>
          <Link href={`/new-post`} className={styles.createPost_link}>
            create a new post
          </Link>
        </div>

        <div className={styles.media_buttons}>
          <button className={styles.photo_btn}>
            <FontAwesomeIcon icon={faImage} className={styles.icon} />
          </button>
        </div>
        <div className={styles.media_buttons}>
          <button className={styles.link_btn}>
            <FontAwesomeIcon icon={faLink} className={styles.icon} />
          </button>
        </div>

        <div className={styles.media_buttons}>
          <button className={styles.createPost_btn} type="submit">
            <FontAwesomeIcon icon={faPlus} className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
