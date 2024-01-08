import Image from 'next/image';

//STYLES
import styles from '../../styles/Main/WebUser.module.css'

//IMAGES
//import space from "../images/space.jpg";

//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
const WebUser = () => {
  return (
    <div className={styles.container}>
      <Image
        alt="Beschreibung des Bildes"
        width={100} // Setze hier die gewünschte Breite
        height={50} // Setze- hier die gewünschte Höhe
        priority={true}
        className={styles.spaceImage}
        src="/space.jpg"
      />

      <div className={styles.home_container}>
        <FontAwesomeIcon icon={faRedditAlien} className={styles.icon} />
        <p> Home </p>
      </div>
      <div className={styles.info_paragraph_container}>
        <p>
          Deine ganz persönliche Reddit Startseite. <br />
          Hier kannst du dir deine Lieblingscommunities ansehen
        </p>
      </div>
      <div className={styles.btn_container}>
        <button> beitrag erstellen </button>
        <button> communitsy erstellen </button>
      </div>
    </div>
  );
};

export default WebUser;
