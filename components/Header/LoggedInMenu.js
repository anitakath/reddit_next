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

      <Link href="/profile"> Einstellungen </Link>

      <p> Profil </p>

      <p> Nachtmodus </p> 

      <button className={styles.logout_btn} onClick={() => dispatch(logout())}>
        abmelden
      </button>


    </div>
  );
};

export default LoggedInMenu;
