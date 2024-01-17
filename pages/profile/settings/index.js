
import Link from "next/link";

//COMPONENTS
import Header from "@/components/Header/Header";
import ProfileSettings from "@/components/Main/Settings/ProfileSettings";


//STYLES
import styles from '../../../styles/Profile/ProfileSettings.module.css'


//FONT AWESOME
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';



const Settings = () =>{



    return (
      <div>
        <Header />
        <div className={styles.container}>
          <h1 className={styles.settings_title}> Nutzereinstellungen </h1>
          <div className={styles.settings_div}>
            <Link
              href="/profile/settings/account"
              className={styles.settings_link}
            >
              {" "}
              Konto{" "}
            </Link>
            <Link
              href="/profile/settings/profile"
              className={styles.settings_link}
            >
              {" "}
              Profil{" "}
            </Link>
            <Link
              href="/profile/settings/security"
              className={styles.settings_link}
            >
              {" "}
              Sicherheit & Datenschutz{" "}
            </Link>
            <Link
              href="/profile/settings/account"
              className={styles.settings_link}
            >
              Feedeinstellungen
            </Link>
            <Link
              href="/profile/settings/account"
              className={styles.settings_link}
            >
              Benachrichtigungen
            </Link>
            <Link
              href="/profile/settings/account"
              className={styles.settings_link}
            >
              Mails
            </Link>
            <Link
              href="/profile/settings/account"
              className={styles.settings_link}
            >
              Abos
            </Link>
            <Link
              href="/profile/settings/account"
              className={styles.settings_link}
            >
              Chats & Nachrichten
            </Link>
            
            <Link href="/" className={styles.home_button}>
              <FontAwesomeIcon icon={faRedditAlien}></FontAwesomeIcon>
            </Link>
          </div>

          <div className={styles.settings_output_container}>
            <ProfileSettings />
          </div>
        </div>
      </div>
    );
}

export default Settings;