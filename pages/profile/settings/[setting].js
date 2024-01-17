
import Link from "next/link";
import { useRouter } from "next/router";


//COMPONENTS
import AccountSettings from "@/components/Main/Settings/AccountSettings";
import ProfileSettings from "@/components/Main/Settings/ProfileSettings";
import SecuritySettings from "@/components/Main/Settings/SecuritySettings";
import Header from "@/components/Header/Header";


//STYLES
import styles from '../../../styles/Profile/ProfileSettings.module.css'

const SettingPage = () =>{

    const router = useRouter();
    const { setting } = router.query;

    const renderSelectedComponent = () => {
        switch(setting) {
        case 'account':
            return <AccountSettings />;
        case 'profile':
            return <ProfileSettings />;
        case 'security':
            return <SecuritySettings />;
        // ... Weitere Fälle für andere Einstellungs-Komponenten
        default:
            return null;
        }
    }

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
          </div>{" "}
          <div className={styles.settings_output_container}>
            {renderSelectedComponent()}
          </div>
        </div>
      </div>
    );
}

export default SettingPage