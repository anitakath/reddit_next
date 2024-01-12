import { Link } from 'next/link';

//STYLES
import styles from '../styles/Login.module.css'

//FONT AWESOME
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () =>{
  /*  <Link href={`/Login`} className={styles.reddit_title}>
            {" "}
            Login{" "}
          </Link>
     */

  /* <Link className={styles.reddit_title}> Register</Link> */
  return (
    <div className={styles.container}>
      <div className={styles.reddit_container}>
        <FontAwesomeIcon icon={faRedditAlien} className={styles.icon} />
        <h2 className={styles.reddit_title}> Login </h2>
        <h2 className={styles.reddit_title}> or </h2>
        <h2 className={styles.reddit_title}> Register </h2>
      </div>

      <div href={`/Register`} className={styles.google_container}>
        Google
      </div>
    </div>
  );
}

export default Login;