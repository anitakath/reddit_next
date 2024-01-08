//REDUX
import { logout } from "@/store/authSlice";
import { useDispatch } from "react-redux";

//STYLE
import styles from '../../styles/Header/LoggedInMenu.module.css'

const LoggedInMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p> Einstellungen </p>
      <p> Profil </p>
      <p> Nachtmodus </p>
      <button className={styles.logout_btn} onClick={() => dispatch(logout())}>
        {" "}
        Abmelden
      </button>
    </div>
  );
};

export default LoggedInMenu;
