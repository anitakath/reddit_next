import Link from "next/link";

//REDUX
import { logout } from "@/store/authSlice";
import { useDispatch } from "react-redux";

//STYLE
import styles from '../../styles/Header/LoggedInMenu.module.css'

const LoggedInMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>

      <p> Profil </p>

      <Link href="/profile/settings"> Profileinstellungen </Link>

      <p> Nachtmodus </p>

      <button className={styles.logout_btn} onClick={() => dispatch(logout())}>
        abmelden
      </button>
    </div>
  );
};

export default LoggedInMenu;
